var db = require("../models");
var router = require("express").Router();
var path = require("path");
var moment = require("moment");
var passport = require("passport");

module.exports = function(app,passport) {


  app.post('/auth/signup', passport.authenticate('local-signup'
  , {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
  }
),
    function (req, res) {
      console.log(req);
    }
  );

  app.post('/auth/login', passport.authenticate('local-signin'
  ,{
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
  }
),
    function (req, res) {

    }
  );

  app.get("/auth/success", function (req, res) {
    res.json(true);
  });

  app.get("/auth/failure", function (req, res) {
    res.json(false);
  });

  app.get("/auth/logout", function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  })


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
    
    
  app.post("/api/day", isLoggedIn, function(req, res) {
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

        db.day.create({
          input_hours_worked: req.body.hoursWorkedDaily,
          input_minutes_worked: req.body.minutesWorkedDaily,
          input_totalhours_worked: totalHoursWorkedDaily,
          input_tip_amount: req.body.tipAmountDaily,
          input_daily_wage: totalWageDaily,
          input_hourly_wage: totalHourlyDaily,
          input_notes: req.body.notes,
          input_user_id: req.user.id

        }).then(function(dbday) {
          // We have access to the new day as an argument inside of the callback function
          res.json(dbday);
          console.log('backend', dbday.id)

        });
    });
        // DELETE route for deleting day. We can get the id of the day to be deleted from
  // req.params.id
  
  
  app.get("/auth/logout", function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  })

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/');
  }
  
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