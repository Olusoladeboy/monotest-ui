import axios from 'axios';


const setTokenHeader = async () => {
	const token = await JSON.parse(localStorage.getItem('@user-token') || 'null');
	if (token) {
		axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
	}
};

export default setTokenHeader;
