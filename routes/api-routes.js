var db = require("../models/index.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/Burger", function(req, res) {
    db.Post.findAll({})
        .then(function(dbPost) {
          res.json(dbPost);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/Burger", function(req, res) {

  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/Burger/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/Burger", function(req, res) {

  });
};


//
//selectAll: function (tableInput, cb) {
// 		var queryString = 'SELECT * FROM ' + tableInput + ';';
// 		connection.query(queryString, function (err, result) {
// 			if (err) throw err;
// 			cb(result);
// 		});
// 	},