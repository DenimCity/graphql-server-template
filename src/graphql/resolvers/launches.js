

export default {
    Query: {
        launches: async (root, args, { superagent, logger, ROUTES }) =>  {
            try {
                const result = await superagent.get(ROUTES.getLaunches);
                const data = Array.isArray(result.body) ? result.body : [...result.body];
                return data;
            } catch (e) {
                logger.warn(`Error retrieving data ${e.message}`);
                return e.message;
            }
        },
        launch: async (root, { flight_number }, { superagent, logger, ROUTES }) => {
            try {
                const result = await superagent.get(`${ROUTES.getLaunch}/${flight_number}`);
                const data = [{ ...result.body }];
                return data;
            } catch (error) {
                logger.warn(getLaunch.name, `Error retrieving data ${error.message}`);
                return error.message;
            }
        }
    }
};