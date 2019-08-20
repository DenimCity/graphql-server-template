import { ApolloServer } from 'apollo-server';
import request from 'request';

import schema from './src/graphql';
import logger from './src/utils/logger';

const server = new ApolloServer({
    cors: true,
    schema,
    context: ({ req }) => ({
        req,
        logger,
        request
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => logger.info(`🚀...Server running on port ${PORT}`));
