import axios from 'axios';
import setTokenHeader from '../setTokenInHeader';

const api_url = process.env.REACT_APP_APIURL
const login = async (payload) => {
	await setTokenHeader()
	const res = await axios.post(
		`${api_url}/user/login`,
		payload
	);
	return res.data;
};

export default login;
