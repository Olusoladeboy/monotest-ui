const loadError = (err: any) => {
	if (typeof err.response !== 'undefined' && err.response.data) {
		const errMsg = err.response.data.message;
		return errMsg;
	} else {
		return err.message;
	}
};

export default loadError;
