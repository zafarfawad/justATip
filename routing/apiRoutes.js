var db = require("../models");
module.exports = function(app) {

    // GET route for getting all of the day
    app.get("/api/day", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.day.findAll({}).then(function(dbday) {
        // We have access to the day as an argument inside of the callback function
        res.json(dbday);
      });
    });
    // Get rotue for retrieving a single day
  app.get("/api/day/:id", function(req, res) {
    db.day.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbday) {
      res.json(dbday);
    });
  });
    // POST route for saving a new day
    
    
    app.post("/api/day", function(req, res) {
      var salary = 5.03;

      function dailyWage() {
        totalHoursWorkedDaily = (parseFloat(req.body.hoursWorkedDaily) + parseFloat(req.body.minutesWorkedDaily));
        totalSalaryDaily = (salary * req.body.hoursWorkedDaily).toFixed(2);
        totalWageDaily = (parseFloat(req.body.tipAmountDaily) + parseFloat(totalSalaryDaily)).toFixed(2)
        totalHourlyDaily = (totalWageDaily / parseFloat(totalHoursWorkedDaily)).toFixed(2);
        console.log(totalHoursWorkedDaily);

        return {
          totalHoursWorkedDaily: totalHoursWorkedDaily,
          totalSalaryDaily: totalSalaryDaily,
          totalWageDaily: totalWageDaily,
          totalHourlyDaily: totalHourlyDaily
        } 
      } 
      

      dailyWage();

      console.log('fawad',totalWageDaily);

        db.day.create({
          input_hours_worked: req.body.hoursWorkedDaily,
          input_minutes_worked: req.body.minutesWorkedDaily,
          input_totalhours_worked: totalHoursWorkedDaily,
          input_tip_amount: req.body.tipAmountDaily,
          input_daily_wage: totalWageDaily,
          input_hourly_wage: totalHourlyDaily,
          input_notes: req.body.notes,

        }).then(function(dbday) {
          // We have access to the new day as an argument inside of the callback function
          res.json(dbday);
          console.log('backend', dbday.id)

        });
    });
        // DELETE route for deleting day. We can get the id of the day to be deleted from
  // req.params.id
  
  
  
  
  
  
  
  app.delete("/api/day/:id", function(req, res) {
    // We just have to specify which day we want to destroy with "where"
    db.day.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbday) {
      res.json(dbday);
    });

  });
    // PUT route for updating day. We can get the updated day data from req.body
    app.put("/api/day", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.day.update({
          text: req.body.text,
          complete: req.body.complete
        }, {
          where: {
            id: req.body.id
          }
        }).then(function(dbday) {
          res.json(dbday);
        });
      });
    
    };