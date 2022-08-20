import axios from 'axios';
import setTokenHeader from '../setTokenInHeader';

const api_url = process.env.REACT_APP_APIURL
const getUserAccount = async () => {
	await setTokenHeader()
	const res = await axios.get(
		`${api_url}/user`
	);
	return res.data;
};

export default getUserAccount;
