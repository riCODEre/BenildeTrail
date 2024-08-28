const bcrypt = require('bcrypt');
const db = require('../models');
const Account = db.accounts;
const Organization = db.organizations;
const OrgMember = db.orgmembers;
const Op = db.Sequelize.Op;
const session = require('express-session');

exports.create = (req, res) => {
  const account = {
    idNumber: req.body.idNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    course: req.body.course,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
  };
  const saltRounds = 5;

  bcrypt.hash(account.password, saltRounds, function(err, hash) {
    if (err) {
      res.status(500).send('Error creating account.');
    } else {
      account.password = hash;
      Account.create(account)
        .then(() => {
          res.redirect('/login');
        })
        .catch((err) => {
          res.render('signup', { error: err.message, account: account });
        });
    }
  });
};

exports.login = (req, res, next) => {
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  
  // Find the account with the given email address
  Account.findOne({ where: { emailAddress: emailAddress} })
    .then((account) => {
      if (!account) {
        console.log("Wrong email/password")
        res.redirect('/login');
      } else {
        // Compare the password with the hashed password stored in the database
        bcrypt.compare(password, account.password,  (err, result) => {
          if (err || !result) {
            res.redirect('/login');
          } else {
            // Create a session for the user
            req.session.accountId = account.id;
            console.log('Successfully logged in');
            res.redirect('/dashboard');
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).send('Error logging in.');
    });
};

exports.session = (req, res, next) => {
  if (req.session.accountId) {
    Organization.findAll({ raw: true })
    .then((orgs) => {
      res.render('dashboard', { title: 'Dashboard', orgs: orgs});
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving organizations'
      });
    });
  } else {
    res.redirect('/login');
  }
};


exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('Error logging out.');
    } else {
      next();
    }
  });
};

//admin

exports.isAuthorized = (pass) => {
    return (req, res, next) => {
      Account.findByPk(req.session.accountId)
        .then((account) => {
          if (account.password === pass.password) {
            next();
          } else {
            res.redirect('/login')
          }
        })
        .catch((err) => {
          res.redirect('/login');
        });
        Organization.findAll({ raw: true })
        .then((orgs) => {
          Account.findAll({ raw: true })
          .then((students) => {
            res.render('admin', { title: 'Admin', orgs: orgs, accounts: students});
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || 'Some error occurred while retrieving organizations'
            });
          });
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving organizations'
          });
        });
    };
  };

exports.createOrg = (req, res) => {
  const org = {
    name: req.body.name,
    aka: req.body.aka,
    description: req.body.description
  };
  
  Organization.create(org)
  .then(() => {
    res.redirect('/admin');
  })
  .catch((err) => {
    res.render('newOrg', { error: err.message, org: org });
  });
};

exports.joinOrg = (req, res, ) => {
  const orgmem = {
    idOrg: req.body.idOrg,
    idMember: req.session.accountId,
  };
  
OrgMember.findOne({where: { idOrg: orgmem.idOrg, idMember: orgmem.idMember}})
  .then((exist) => {
    if (exist) {
      console.log("existing")
      res.redirect('/dashboard');
    } else{
      OrgMember.create(orgmem)
      .then(() => {
        res.redirect('/dashboard');
      })
      .catch((err) => {
        res.status(400).json({error: err.message});
      });
    }
  })
  
};

exports.sessionmyOrgs = (req, res, next) => {
  if (req.session.accountId) {
    const idMember = req.session.accountId;
    OrgMember.findAll({ where: { idMember: idMember } })
      .then((findOrgs) => {
        const orgIds = findOrgs.map(org => org.idOrg);
        Organization.findAll({ where: { id: orgIds } })
          .then((myOrgs) => {
            res.render('myOrg', { orgs: myOrgs });
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message + "inner" || 'Some error occurred while retrieving organizations',
            });
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving organizations',
        });
      });
  } else {
    res.redirect('/login');
  }
};

exports.viewMember = (req,res,next) => {
  req.session.idOrg = req.body.idOrg;
  res.redirect('/viewMember');
};

exports.sessionmyMem = (req, res, next) => {
  if (req.session.accountId) {
    const idOrgs = req.session.idOrg;
    OrgMember.findAll({ where: { idOrg: idOrgs } })
      .then((findMems) => {
        const MemIds = findMems.map(mem => mem.idMember);
        Account.findAll({ where: { id: MemIds } })
          .then((myMems) => {
            res.render('viewMember', { accounts: myMems });
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message + "inner" || 'Some error occurred while retrieving organizations',
            });
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving organizations',
        });
      });
  } else {
    res.redirect('/login');
  }
};
