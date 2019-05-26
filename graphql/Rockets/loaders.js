
const getLaunches = async (root, args, { superagent, logger, ROUTES }) => {
  try {
    const result = await superagent.get(ROUTES.getLaunches);
    const data = Array.isArray(result.body) ? result.body : [...result.body];
    return data;
  } catch (e) {
    logger.warn(getLaunches.name, `Error retrieving data ${e.message}`);
    return e.message;
  }
};

const getLaunch = async (_, { flight_number }, { superagent, logger, ROUTES }) => {
  try {
    const result = await superagent.get(`${ROUTES.getLaunch}/${flight_number}`);
    const data = [{ ...result.body }];
    return data;
  } catch (error) {
    logger.warn(getLaunch.name, `Error retrieving data ${error.message}`);
    return error.message;
  }
};

const getRockets = async (root, args, { superagent, ROUTES, v4, logger }) => {
  try {
    const result = await superagent.get(ROUTES.getRockets);
    const data = [{ ...result.body }];
    return data;
  } catch (e) {
    logger.warn(getRockets, `Error retrieving data ${e.message}. Error code: ${v4().substring(0, 13)}`);
    return e.message;
  }
};

const getRocket = async (_, args, { superagent, ROUTES, res, v4, logger }) => {
  try {
    const result = await superagent.get('https://api.spacexdata.com/v3/rockets/falcon9');
    const body = [{ ...result.body }];
    return body;
  } catch (e) {
    console.warn(e.message);
    logger.warn(getRockets.name, `:> Error retrieving data ${e.message}. Error Code: ${v4().substring(0, 13)}`);
    return e.message;
  }
};


export {
  getLaunch, getLaunches, getRocket, getRockets,
};
