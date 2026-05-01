import axios from "axios"
import * as dotenv from "dotenv"

export default async function postToFacebook(message: string) {
	dotenv.config()

	const PAGE_ID: string = process.env.PAGE_ID
	const PAGE_ACCESS_TOKEN: string = process.env.FB_TOKEN

	try {
		const url = `https://graph.facebook.com/${PAGE_ID}/feed`
		const response = await axios.post(url, null, {
			params: {
				message: message,
				access_token: PAGE_ACCESS_TOKEN
			}
		})
		console.log("Posted")
	} catch (e) {
		console.error(e)
	}
}
