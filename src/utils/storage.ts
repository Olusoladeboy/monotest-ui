const storage = {
	addItem: (key: string, value: any) => {
		localStorage.setItem(key, JSON.stringify(value));
	},
	removeItem: (key: string) => {
		localStorage.removeItem(key);
	},
	getItem: (key: string) => {
		const itemInStore = localStorage.getItem(key);
		if (itemInStore) {
			return JSON.parse(itemInStore);
		}
		return null;
	},
};

export default storage;
