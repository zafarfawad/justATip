var db = require("../models");
var router = require("express").Router();
var path = require("path");
var moment = require("moment");
var passport = require("passport");

module.exports = function (app, passport) {


  app.post('/auth/signup', passport.authenticate('local-signup', {
      successRedirect: '/auth/success',
      failureRedirect: '/auth/failure'
    }),
    function (req, res) {
    }
  );
  app.post('/auth/login', passport.authenticate('local-signin', {
      successRedirect: '/auth/success',
      failureRedirect: '/auth/failure'
    }),
    function (req, res) {

    }
  );

  app.get("/auth/success", function (req, res) {
    res.json(true);
  });

  app.get("/auth/failure", function (req, res) {
    res.json(false);
  });

  // app.get("/auth/logout", function (req, res) {
  //   req.session.destroy(function (err) {
  //     res.redirect('/');
  //   });
  // })



  // GET route for getting all of the day
  app.get("/api/day", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.day.findAll({
      where: {
        input_user_id: req.user.id
      },
      limit: 5,
      order: [['createdAt', 'DESC']]
      
    }).then(function (dbdayrecord) {
      // We have access to the day as an argument inside of the callback function
      res.json(dbdayrecord);
      console.log('fawad',req.user);
    });
  });
  //Retrieve History
  app.get("/api/history", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.day.findAll({
      where: {
        input_user_id: req.user.id,
      },

    }).then(function (dbHistoryrecord) {
      // We have access to the day as an argument inside of the callback function
      res.json(dbHistoryrecord);
    });
  });


  // POST route for saving a new day


  app.post("/api/day", function (req, res) {
   // getting salary info from the user table.
    var salary = req.user.hourlyWage;

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
      input_user_id: req.user.id,
      // input_user_name: req.user.username


    }).then(function (dbday) {
      // We have access to the new day as an argument inside of the callback function
      res.json(dbday);

    });
  });
  // DELETE route for deleting day. We can get the id of the day to be deleted from
  // req.params.id


  app.get("/auth/logout", function (req, res) {
    req.session.destroy(function (req,err,next){
      res.clearCookie('connect.sid');
        res.redirect('/');

    });
    
  });


  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/');
  }

  app.delete("/api/day/:id", function (req, res) {
    // We just have to specify which day we want to destroy with "where"
    db.day.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbday) {
      res.json(dbday);
    });

  });
  // PUT route for updating day. We can get the updated day data from req.body
  app.put("/api/day", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.day.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbday) {
      res.json(dbday);
    });
  });

  router.get("/about", function(req, res) {
      console.log("here");
      res.render("index");
  });

};