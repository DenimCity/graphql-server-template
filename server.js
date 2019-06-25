import { ApolloServer } from 'apollo-server';
import { v4 } from 'uuid';
import superagent from 'superagent';
import schema from './graphql';
import { logger } from './utils';
import ROUTES from './constants';


const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req, res, logger, v4, ROUTES, superagent,
  }),
  // NOTE: is ensure that sensitive error information is not stored in browser.
  // NOTE: As well as attach a unique ID to each error for better log tracing.
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => logger.info(`🚀...Server running on port ${PORT}/graphql`));
