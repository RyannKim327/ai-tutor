import axios from "axios"

export default async function createToken(TOKEN: string) {
	try {
		const PAGE_ACCESS_TOKEN: string = TOKEN
		const url = `https://graph.facebook.com/v25.0/me/accounts`
		const response = await axios.get(url, {
			params: {
				access_token: PAGE_ACCESS_TOKEN,
				debug: "all",
				format: "json",
				method: "get",
				origin_graph_explorer: 1,
				pretty: 0,
				suppress_http_code: 1,
				transport: "cors"
			}
		})
		if (Array.isArray(response.data.data)) {
			return response.data.data[0].access_token
		} else {
			console.error(response?.data as string)
		}
	} catch (e) {
		console.error(e)
		createToken(TOKEN)
	}
}
