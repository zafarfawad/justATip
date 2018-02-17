// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "week" model that matches up with DB
var week = sequelize.define("week", {
    id: Sequelize.INTEGER,
    tipAmt: Sequelize.INTEGER,
    notes: Sequelize.STRING}, {
        timestamps: true
    });

    //syncs with DB
    week.sync();
// Makes the Character Model available for other files (will also create a table)

    module.exports = week;

    //brandons test
    