export default {
	Query: {
		launches: async (root, args, { logger, request }) =>
			new Promise((resolve, reject) => {
				request(
					{
						uri: 'https://api.spacexdata.com/v3/launches',
						strictSSL: false,
						json: true
					},
					(error, response, body) => {
						if (error) {
							logger.error(`Error retrieving data ${error.message}`);
							reject(Error(error.message));
						}
						if (body) {
							let results = body;
							if (!Array.from(body)) {
								results = [ body ];
							}
							resolve(results);
						}
					}
				);
			}),
		launch: async (root, { flight_number }, { logger, request }) =>
			new Promise((resolve, reject) => {
				request(
					{
						uri: `https://api.spacexdata.com/v3/launches/${flight_number}`,
						strictSSL: false,
						json: true
					},
					(error, response, body) => {
						if (error) {
							logger.error(`Error retrieving data ${error.message}`);
							reject(Error(error.message));
						}
						if (body) {
							let results = body;
							if (!Array.from(body)) {
								results = [ body ];
							}
							resolve(results);
						}
					}
				);
			})
	}
};
