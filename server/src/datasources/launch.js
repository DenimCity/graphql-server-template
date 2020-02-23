import axios from 'axios';

export default class LaunchAPI {
	constructor() {
		this.baseURL = 'https://api.spacexdata.com/v3/launches';
	}

	launchReducer = (launch) => {
		return {
			id: launch.flight_number || 0,
			cursor: `${launch.launch_date_unix}`,
			site: (launch.launch_site && launch.launch_site.site_name) || 'Site Not Available',
			launchDate: launch.launch_date_utc,
			launchSuccess: typeof variable === 'boolean' ? launch.launch_success : false,
			mission: {
				id: launch.mission_id[0] || launch.flight_number || 0,
				name: launch.mission_name
			},
			rocket: {
				id: launch.rocket.rocket_id,
				name: launch.rocket.rocket_name,
				type: launch.rocket.rocket_type
			},
			year: launch.launch_year
		};
	};

	GET_ALL_LAUNCHES = async () => {
		const response = await axios.get(this.baseURL);
		return response.data.map((launch) => this.launchReducer(launch));
	};

	GET_LAUCH_BY_ID = async (launchId) => {
		const res = await axios.get(`${this.baseURL}/${launchId}`);
		return this.launchReducer(res.data);
	};

	GET_LAUNCHES_BY_ID = async (launchIds) => {
		return Promise.all(launchIds.map((launchId) => this.GET_LAUCH_BY_ID(launchId)));
	};
}
