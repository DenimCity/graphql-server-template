export default {
    Query: {
        rockets: (roo, args, {request}) => new Promise((resolve,reject) => {
            request({
                uri: 'https://api.spacexdata.com/v3/rockets',
                strictSSL: false,
                json: true,
            }, (error, response, body) => {
                if (error){
                    logger.warn(getLaunch.name, `Error retrieving data ${error.message}`);
                    reject(Error(error.message));
                }
                if (body){
                    let results = body;
                    if(!Array.from(body)){
                        results = [body];
                    }
                    resolve(results);
                }
            });
        })
    } 
};


