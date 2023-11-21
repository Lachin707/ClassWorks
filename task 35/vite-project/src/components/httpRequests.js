import axios from "axios"

export async function getDataFromApi(API_URL) {
	let retData;
	await axios
		.get(API_URL)
		.then((result) => {
			retData = result.data;
		})
		.catch((err) => {
			console.error(err);
		});
	return retData;
}

export async function getDataFromApiByID(API_URL_ID) {
	let data;
	await axios
		.get(API_URL_ID)
		.then((result) => {
			data = result.data;
		})
		.catch((err) => {
			console.error(err);
		});
	return data;
}

export function deleteDataFromApiByID(API_URL_ID) {
	axios.delete(API_URL_ID).catch((err) => {
		console.error(err);
	});
}

export async function postDataToApi(API_URL, payload) {
	await axios.post(API_URL, payload).catch((err) => {
		console.error(err);
	});
}

export async function putDataToApiByID(API_URL_ID, payload) {
	await axios.put(API_URL_ID, payload).catch((err) => {
		console.error(err);
	});
}

export function patchDataToApiByID(API_URL_ID, payload) {
	axios.patch(API_URL_ID, payload).catch((err) => {
		console.error(err);
	});
}