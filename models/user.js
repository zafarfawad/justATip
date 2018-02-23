// var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        // id: {
        //     type: DataTypes.INTERGER,
        //     allowNull: false,
        //     // Primarykey: true,

        //     validate: {
        //         len: [1]
        //     }
        // },
        name: {
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
        confirmPassword: {
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
    User.associate = function (models) {
        // Associating user with day entry
        // When an user is deleted, also delete any associated tip info
        User.hasMany(models.day, {
            onDelete: "cascade"
        });
    };

    return User;
};