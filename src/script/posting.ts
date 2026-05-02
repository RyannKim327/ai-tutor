import axios from "axios"
import * as dotenv from "dotenv"
import createToken from "./create_token"

export default async function postToFacebook(message: string) {
	dotenv.config()

	const PAGE_ID: string = process.env.PAGE_ID
	const TOKEN: string = await createToken() as string

	try {
		const url = `https://graph.facebook.com/${PAGE_ID}/feed`
		const response = await axios.post(url, null, {
			params: {
				message: message,
				access_token: TOKEN
			}
		})
		console.log("Posted")
	} catch (e) {
		console.error(e)
	}
}
