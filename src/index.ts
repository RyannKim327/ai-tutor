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
		postToFacebook(`🚀🔥 WEEK #${ext.week_number} JUST DROPPED IN AI TUTOR!\n\nThis week’s challenge: ${ext.challenge_name} 💡⚡\n\nThink you’ve got what it takes? Dive in NOW:\nhttps://github.com/RyannKim327/ai-tutor/tree/main/week-${ext.week_number}\n\nAlready forked? Sync your repo and keep pushing forward 💻🔥`)
		await addChallenge(ext)
	} catch (e) {
		console.log(e)
		main()
	}
}
main()
