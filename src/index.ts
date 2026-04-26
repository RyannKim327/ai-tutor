import addChallenge from "./script/add-challenge"
import ai from "./script/api"
import extractor from "./script/extractor"
import add from "./script/tolist"

(async () => {
	const api = await ai()
	const ext = extractor(api)
	console.log(ext)
	add(ext.week_number, ext.challenge_name)
	await addChallenge(ext)
})()
