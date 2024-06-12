import {
	api
} from './api';

const search = async (q) => {
	try {
		const path = `/api/v1/application/search?q=${q}`;
		const {
			data
		} = await api.get(path);
		return data;
	} catch (error) {
		return [];
	}
};

export {
	search
};