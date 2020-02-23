import { ApolloServer } from 'apollo-server';

import schema from './server/src/graphql';
import logger from './server/src/utils/logger';
import dataSources from './server/src/datasources';

const server = new ApolloServer({
	cors: true,
	schema,
	context: ({ req }) => ({
		req,
		logger,
		dataSources
	})
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => logger.info(`🚀...Server running on port ${PORT}`));
