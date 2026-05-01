import addChallenge from "./script/add-challenge"
import ai from "./script/api"
import extractor from "./script/extractor"
import postToFacebook from "./script/posting"
import add from "./script/tolist"

async function main() {
	try {
		const api = await ai()
		const ext = extractor(api)
		if (ext.week_number === undefined)
			throw Error("No Week")
		add(ext.week_number, ext.challenge_name)
		postToFacebook(`Week #${ext.week_number} has arrived in ai-tutor, visit and explore another challenge from it thru: https://github.com/RyannKim327/ai-tutor/tree/main/week-${ext.week_number}`)
		await addChallenge(ext)
	} catch (e) {
		main()
	}
}
main()
