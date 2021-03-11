const User = require('../models/userModel')

module.exports = {
    async registerPage(req, res) {
        try {
            return res.render('public/register')
        } catch (error) {
            console.error(eror);
        }
    },
    
    async post(req, res) {
        try {
            const keys = Object.keys(req.body) 
            for(key of keys) {
                if (req.body[key] =='') {
                    return res.render('public/register', {error: 'Por favor, preencha todos os campos!'})
                }
            }

            let {email} = req.body

            let verify = await User.findOne({email})
            if(verify) return res.render('public/register', {error: 'Usuário já cadastrado!'})

            let user = await User.create(req.body)
            
            return res.render('public/register', {success: 'Cadastro realizado com sucesso! Fique atento ao seu email'})
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

            return res.json(user)
        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        await User.deleteOne({_id: req.body._id})

        return res.json('user deleted')
    }
}