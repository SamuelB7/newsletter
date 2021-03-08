const User = require('../models/userModel')

module.exports= {
    async searchByGames(req, res) {
        let searchedGame = req.query.game
        let results = await User.find({
            games: {
                $in: searchedGame
            }
        })

        return res.json(results)
    },
}