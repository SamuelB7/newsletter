const Admin = require('../models/adminModel')
const { hash } = require('bcryptjs')

module.exports = {
    async home(req, res) {
        try {
            
        } catch (error) {
            console.error(eror);
        }
    },
    
    async post(req, res) {
        try {
            let {email, password} = req.body

            let verify = await Admin.findOne({email})
            if(verify) return res.json({error: 'Admin já cadastrado!'})

            const passwordHash = await hash(password, 7)
            req.body.password = passwordHash

            let admin = await Admin.create(req.body)
            
            return res.json(admin)
        } catch (error) {
            console.error(error);
        }
    },

    async put(req, res) {
        try {


            let admin = await Admin.updateOne(
                {_id: req.body._id},
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            )

            return res.json(admin)
        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        try {
            await Admin.deleteOne({_id: req.body._id})

            return res.json('Admin deleted!')
        } catch (error) {
            console.error(error);
        }
    },

    async show(req, res) {
        try {
            let admin = await Admin.findOne({_id: req.body._id})

            return res.json({admin})
        } catch (error) {
            console.error(error);
        }
    }
}