// var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {

        username: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        zipCode: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        jobTitle: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hourlyWage: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    user.associate = function (models) {
        // Associating user with day entry
        // When an user is deleted, also delete any associated tip info
        user.hasMany(models.day, {
            onDelete: "cascade"
        });
    };

    return user;
};