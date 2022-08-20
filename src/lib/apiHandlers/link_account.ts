import axios from 'axios';
import setTokenHeader from '../setTokenInHeader';

const api_url = process.env.REACT_APP_APIURL
const link_account = async (payload) => {
	await setTokenHeader()
	const res = await axios.put(
		`${api_url}/user/link-account`,
		payload
	);
	return res.data;
};

export default link_account;
