import addChallenge from "./script/add-challenge"
import ai from "./script/api"
import extractor from "./script/extractor"
import add from "./script/tolist"

async function main() {
	try {
		const api = await ai()
		const ext = extractor(api)
		if (ext.week_number === undefined)
			throw Error("No Week")
		console.log(ext)
		add(ext.week_number, ext.challenge_name)
		await addChallenge(ext)
	} catch (e) {
		main()
	}
}
main()
