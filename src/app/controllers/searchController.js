const User = require('../models/userModel')

module.exports= {
    async search(req, res) {
        try {
            
            return res.json({results})
        } catch (error) {
            console.error(error);
        }
    },
}