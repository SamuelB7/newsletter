const User = require('../models/userModel')

module.exports= {
    async searchByGames(req, res) {
        try {
            let {games} = req.query

            let results = await User.find({
                games: {
                    $in: games
                }
            })
        
            return res.json({results})
        } catch (error) {
            console.error(error);
        }
    },
}