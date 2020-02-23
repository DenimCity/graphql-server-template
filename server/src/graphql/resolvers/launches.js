/* eslint-disable no-return-await */
export default {
	Query: {
		launches: async (_, __, { dataSources }) => {
			return await dataSources.launchApi.GET_ALL_LAUNCHES();
		},
		launch: async (_, { flight_number }, { dataSources }) => {
			return await dataSources.launchApi.GET_LAUCH_BY_ID(flight_number);
		},
		launchesByID: async (_, { flight_numbers }, { dataSources }) => {
			return await dataSources.launchApi.GET_LAUNCHES_BY_ID(flight_numbers);
		}
	}
};
