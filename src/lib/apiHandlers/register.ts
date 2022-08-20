import axios from 'axios';
import setTokenHeader from '../setTokenInHeader';

const api_url = process.env.REACT_APP_APIURL
const register = async (payload) => {
	await setTokenHeader()
	const res = await axios.post(
		`${api_url}/user/register`,
		payload
	);
	return res.data;
};

export default register;
