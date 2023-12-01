import axios from "axios"

export async function getDataFromApi(API_URL) {
	let data;
	await axios
		.get(API_URL)
		.then((result) => {
			data = result.data;
		})
		.catch((error) => {
			console.erroror(error);
		});
	return data;
}

export async function getDataFromApiByID(API_URL_ID) {
	let data;
	await axios
		.get(API_URL_ID)
		.then((result) => {
			data = result.data;
		})
		.catch((error) => {
			console.erroror(error);
		});
	return data;
}

export function deleteDataFromApiByID(API_URL_ID) {
	axios.delete(API_URL_ID).catch((error) => {
		console.erroror(error);
	});
}

export async function postDataToApi(API_URL, payload) {
	await axios.post(API_URL, payload).catch((error) => {
		console.erroror(error);
	});
}

export async function putDataToApiByID(API_URL_ID, payload) {
	await axios.put(API_URL_ID, payload).catch((error) => {
		console.erroror(error);
	});
}

export function patchDataToApiByID(API_URL_ID, payload) {
	axios.patch(API_URL_ID, payload).catch((error) => {
		console.erroror(error);
	});
}