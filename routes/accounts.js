var express = require('express');
var router = express.Router();
var accounts = require('../controllers/account.controller.js');

const pass = {
    emailAddress: 'admin@gmail.com',
    password: '$2b$05$WqlT2ZA8KycgtbAN74HtGeVNOBrRH4Y353VQQuWPu8a3rehOUFRyO'
};

router.get('/signup', accounts.logout, function(req, res, next) {
    res.render('signup', { title: 'Signup' });
});

router.post('/signup', accounts.create, function(req, res, next) {
    res.render('signup', { title: 'Login' });
});

router.get('/login', accounts.logout, function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/', accounts.session, function(req, res, next) {
    res.render('dashboard', { title: 'Login' });
});

router.post('/login', accounts.login, function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/dashboard', accounts.session, function(req, res, next) {
    //none
});

router.post('/logout', accounts.logout, function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/admin', accounts.isAuthorized(pass), function(req, res, next) {
    //none
});

router.get('/newOrg', accounts.isAuthorized(pass), function(req, res, next) {
    res.render('newOrg', { title: 'AddOrg' });
});

router.post('/newOrg', accounts.createOrg, function(req, res, next) {
    res.render('admin', { title: 'AddOrg' });
});

router.post('/joinOrg', accounts.joinOrg, function(req, res, next) {
    res.render('dashboard', { title: 'JoinOrg' });
});

router.get('/myOrg', accounts.sessionmyOrgs, function(req, res, next) {
    
});

router.post('/viewMember', accounts.viewMember, function(req, res, next) {
    
});

router.get('/viewMember', accounts.sessionmyMem, function(req, res, next) {
    res.render('dashboard');
});






// router.get('/', students.findAll);
// router.get('/:id', students.findOne);
// router.put('/:id', students.update);
// router.delete('/:id', students.delete);
// router.delete('/', students.deleteAll);

module.exports = router;