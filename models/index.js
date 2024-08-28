const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/betrail.db'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.accounts = require('./account.model.js')(sequelize, Sequelize);
db.organizations = require('./org.model.js')(sequelize, Sequelize);
db.orgmembers = require('./orgmember.model.js')(sequelize, Sequelize);

module.exports = db;