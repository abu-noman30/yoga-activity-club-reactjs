const setDataToLocalStorage = (value) => {
	const checkLocalStorage = localStorage.getItem('break-time');
	if (checkLocalStorage === null) {
		localStorage.setItem('break-time', value);
	} else {
		localStorage.removeItem('break-time');
		localStorage.setItem('break-time', value);
	}
};

const getDataFromLocalStorage = () => {
	const checkLocalStorage = localStorage.getItem('break-time');
	if (checkLocalStorage === null) {
		return 0;
	} else {
		return checkLocalStorage;
	}
};

export { setDataToLocalStorage, getDataFromLocalStorage };
