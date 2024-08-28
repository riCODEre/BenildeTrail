module.exports = (sequelize, Sequelize) => {
const Account = sequelize.define('account', {
        idNumber: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isInt: true
        }
        },
        firstName: {
        type: Sequelize.STRING
        },
        lastName: {
        type: Sequelize.STRING
        },
        course: {
        type: Sequelize.STRING,
        },
        emailAddress: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true
        }
        },
        password: {
            type: Sequelize.STRING
        },
    });

return Account;
};
