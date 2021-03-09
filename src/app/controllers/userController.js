const User = require('../models/userModel')

module.exports = {
    async index(req, res) {
        try {
            let usersIndex = await User.find()

            return res.json(usersIndex)
        } catch (error) {
            console.error(eror);
        }
    },
    
    async post(req, res) {
        try {
            let {email} = req.body

            let verify = await User.findOne({email})
            if(verify) return res.json({error: 'Usuário já cadastrado!'})

            let user = await User.create(req.body)
            
            return res.json(user)
        } catch (error) {
            console.error(error);
        }
    },

    async put(req, res) {
        try {
            let user = await User.updateOne(
                {_id: req.body._id},
                {
                    name: req.body.name,
                    email: req.body.email
                }
            )

            return res.json('user updated')
        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        await User.deleteOne({_id: req.body._id})

        return res.json('user deleted')
    }
}