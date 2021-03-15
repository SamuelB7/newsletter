const Admin = require('../models/adminModel')
const {compare} = require('bcryptjs')

module.exports = {
    async login(req, res) {
        try {
            let admin = await Admin.findOne({email: req.body.email})
            if(!admin) return res.render('admin/home', {error: "Admin não localizado"})

            const verifyPassword = await compare(req.body.password, admin.password)
            if(!verifyPassword) return res.render('admin/home', {error: "Senha incorreta"})

            req.session.adminId = admin.id
            
            return res.redirect('/admin/newsletter-form')
            
        } catch (error) {
            console.error(error);
        }
    },

    logout(req, res) {
        req.session.destroy()
        return res.redirect('/admin')
    }
}