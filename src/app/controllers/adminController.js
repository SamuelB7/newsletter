const Admin = require('../models/adminModel')

module.exports = {
    async index(req, res) {
        try {
            let index = await Admin.find()

            return res.json(index)
        } catch (error) {
            console.error(eror);
        }
    },
    
    async post(req, res) {
        try {
            let {email} = req.body

            let verify = await Admin.findOne({email})
            if(verify) return res.json({error: 'Usuário já cadastrado!'})

            let admin = await Admin.create(req.body)
            
            return res.json(admin)
        } catch (error) {
            console.error(error);
        }
    }
}