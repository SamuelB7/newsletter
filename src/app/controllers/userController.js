const User = require('../models/userModel')

module.exports = {
    async subscribePage(req, res) {
        try {
            return res.render('public/subscribe')
        } catch (error) {
            console.error(eror);
        }
    },

    async unsubPage(req, res) {
        try {
            return res.render('public/unsubscribe')
        } catch (error) {
            console.error(error);
        }
    },
    
    async post(req, res) {
        try {
            const keys = Object.keys(req.body) 
            for(key of keys) {
                if (req.body[key] =='') {
                    return res.render('public/subscribe', {error: 'Por favor, preencha todos os campos!'})
                }
            }

            let {email} = req.body

            let verify = await User.findOne({email})
            if(verify) return res.render('public/subscribe', {error: 'Usuário já cadastrado!'})

            let user = await User.create(req.body)
            
            return res.render('public/subscribe', {success: 'Cadastro realizado com sucesso! Fique atento ao seu email'})
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
        let user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.render('public/unsubscribe', {error: 'Email não encontrado!'})
        }

        await User.deleteOne({email: req.body.email})

        return res.render('public/subscribe', {success: 'Seu email foi removido da nossa lista'})
    }
}