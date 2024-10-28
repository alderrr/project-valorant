const axios = require('axios')
// const valorantAPI = process.env.VALORANT_API_KEY

class Controller {
    static async testConnection(req,res, next) {
        try {
            res.status(200).json("TEST")
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async getAgents(req, res, next) {
        try {
            const {data} = await axios({
                url: "https://valorant-api.com/v1/agents",
                method: "GET",
                headers: {}
            })
            const agentName = data.data.map(element => element.displayName)
            const agentDesc = data.data.map(element => element.description)
            const agentPortrait = data.data.map(element => element.fullPortrait)
            res.status(200).json({
                name: agentName,
                desc: agentDesc,
                portrait: agentPortrait
            })
        } catch (error) {
            console.log(error, "ROUTE GET AGENTS");
            next(error)
        }
    }
}

module.exports = Controller