const User = require('../models/userModel')

module.exports = {
    async index(req, res) {
        let usersIndex = await User.find()

        return res.json(usersIndex)
    },
    
    async post(req, res) {
        let {email} = req.body

        let verify = await User.findOne({email})
        if(verify) return res.json({error: 'Usuário já cadastrado!'})

        let user = await User.create(req.body)
        
        return res.json(user)
    }
}