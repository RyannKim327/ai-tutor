import axios from "axios"
import * as dotenv from "dotenv"

export default async function createToken() {
	dotenv.config()
	try {
		const PAGE_ACCESS_TOKEN: string = process.env.FB_TOKEN
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
		return response.data.data[0].access_token
	} catch (e) {
		createToken()
	}
}
