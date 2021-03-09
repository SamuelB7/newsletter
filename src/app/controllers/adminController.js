const Admin = require('../models/adminModel')

module.exports = {
    async home(req, res) {
        try {
            
        } catch (error) {
            console.error(eror);
        }
    },
    
    async post(req, res) {
        try {
            let {email} = req.body

            let verify = await Admin.findOne({email})
            if(verify) return res.json({error: 'Admin já cadastrado!'})

            let admin = await Admin.create(req.body)
            
            return res.json(admin)
        } catch (error) {
            console.error(error);
        }
    },

    async put(req, res) {
        try {
            let email = req.body.email
            let admin = await Admin.updateOne({email})

            return res.json()
        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        try {
            
        } catch (error) {
            console.error(error);
        }
    },

    async show(req, res) {
        try {

        } catch (error) {
            console.error(error);
        }
    }
}