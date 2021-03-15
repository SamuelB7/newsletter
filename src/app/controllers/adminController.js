const Admin = require('../models/adminModel')
const User = require('../models/userModel')
const { hash } = require('bcryptjs')
const mailer = require('../../../lib/mailer')

module.exports = {
    async home(req, res) {
        try {
            return res.render('admin/home')
        } catch (error) {
            console.error(eror);
        }
    },

    async newsletterForm(req, res) {
        try {
            return res.render('admin/newsletter-form')
        } catch (error) {
            console.error(error);
        }
    },

    async sendNewsletter(req, res) {
        try {
            let emailText = req.body.text

            let emailList = await User.find({}, {email: 1, _id: 0})

            for(let i = 0; i < 2; i++) {
                await mailer.sendMail({
                    to: emailList[i].email,
                    from: 'no-reply@newsletter.com',
                    subject: 'Sua newsletter semanal!',
                    text: emailText,
                    html: '<a href="/user/unsub" target="_blank">Clique aqui para cancelar a newsletter<a/>'
                })
            }

            return res.render('admin/newsletter-form', {success: 'Newsletter enviada com sucesso!'})
        } catch (error) {
            console.error(error);
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