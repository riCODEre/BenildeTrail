module.exports = (sequelize, Sequelize) => {
    const OrgMember = sequelize.define('orgmember', {
            idOrg: {
            type: Sequelize.INTEGER
            },
            idMember: {
            type: Sequelize.INTEGER
            }
        });
    
    return OrgMember;
    };
    