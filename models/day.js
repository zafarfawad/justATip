// var sequelize = require("./models");

module.exports = function (sequelize, DataTypes) {
    var day = sequelize.define("day", {
        input_user_id: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        // input_user_name: {
        //     type: DataTypes.TEXT,
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
        input_minutes_worked: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        input_daily_wage: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        input_hourly_wage: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        input_totalhours_worked: {
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
    // day.associate = function (models) {
    //     // We're saying that a day should belong to an user
    //     // A day can't be created without an user due to the foreign key constraint
    //     day.belongsTo(models.user
    //         , {
    //         input_user_id: {
    //             foreignKey: true,
    //             allowNull: true
    //         }
    //     });
    // };

    day.associate = function (models) {
        day.belongsTo(models.user);
    }
    return day;
};