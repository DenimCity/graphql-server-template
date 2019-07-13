export const getRockets = async (root, args, { superagent, ROUTES, v4, logger }) => {
    try {
        const result = await superagent.get(ROUTES.getRockets);
        const data = [{ ...result.body }];
        return data;
    } catch (e) {
        logger.warn(getRockets, `Error retrieving data ${e.message}. Error code: ${v4().substring(0, 13)}`);
        return e.message;
    }
};

export const getRocket = async (_, args, { superagent, v4, logger }) => {
    try {
        const result = await superagent.get('https://api.spacexdata.com/v3/rockets/falcon9');
        const body = [{ ...result.body }];
        return body;
    } catch (e) {
        logger.warn(e.message);
        logger.warn(getRockets.name, `:> Error retrieving data ${e.message}. Error Code: ${v4().substring(0, 13)}`);
        return e.message;
    }
};