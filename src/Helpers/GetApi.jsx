import axios from "axios";
export const GetNaruto = async () => {
	try {
		const res = await axios({
			method: "get",
			url: "https://naruto-api.herokuapp.com/api/v1/characters"
		});
		//console.log(res);
		const data = await res.data;
		//console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
