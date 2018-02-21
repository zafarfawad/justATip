// var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
    var day = sequelize.define("day", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allownull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        input_tip_amount: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        input_hours_worked: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        input_notes: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                len: [1]
            }
        }
    });
    day.associate = function (models) {
        // We're saying that a day should belong to an user
        // A day can't be created without an user due to the foreign key constraint
        day.belongsTo(models.user, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return day;
};