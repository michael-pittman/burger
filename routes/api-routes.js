//var express = require('express');
//var router = express.Router();
//var burger = require('../models/burgers.js');
//
//router.get('/', function(req, res){
//    burger.all(function(burger_data){
//        console.log(burger_data);
//        res.render('index',{burger_data});
//    })
//})
//
//router.put('/burgers/update', function(req, res){
//    burger.update(req.body.burger_id, function(result){
//        console.log(result);
//        res.redirect('/');
//    })
//})
//
//router.post('/burgers/create', function(req, res){
//    burger.create(req.body.burger_name, function(result){
//        console.log(result);
//        res.redirect('/');
//    })
//})
//module.exports = router;


var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/Burger", function(req, res) {

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
