import { ApolloServer } from 'apollo-server';
import { v4 } from 'uuid';
import request from 'request';
import schema from './graphql';
import { logger } from './utils';


const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
        req, res, logger, v4,request
    }),
});


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => logger.info(`🚀...Server running on port ${PORT}/graphql`));
