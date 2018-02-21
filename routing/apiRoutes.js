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
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.day.create({
          input_hours_worked: req.body.selection1,
          input_tip_amount: req.body.selection2,
          input_notes: req.body.selection3,
        }).then(function(dbday) {
          // We have access to the new day as an argument inside of the callback function
          res.json(dbday);
        });
        console.log('fawad', req.body)
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