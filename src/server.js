import { ApolloServer } from 'apollo-server';
import { v4 } from 'uuid';
import superagent from 'superagent';
import schema from './graphql';
import { logger } from './utils';
import ROUTES from '../constants';


const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
        req, res, logger, v4, ROUTES, superagent,
    }),
});


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => logger.info(`🚀...Server running on port ${PORT}/graphql`));
