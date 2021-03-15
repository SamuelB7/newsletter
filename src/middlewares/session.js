function onlyAdmins(req, res, next) {
    if(!req.session.adminId) {
        return res.redirect('/admin')
    } 
    //console.log(req.session)
    next()
}

module.exports = {
    onlyAdmins
}