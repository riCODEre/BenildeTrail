module.exports = (sequelize, Sequelize) => {
    const Org = sequelize.define('org', {
            name: {
            type: Sequelize.STRING,
            unique: true
            },
            aka: {
            type: Sequelize.STRING
            },
            description: {
            type: Sequelize.STRING,
            null: true
            }
            
        });
    
    return Org;
    };
    