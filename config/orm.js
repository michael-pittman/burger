var connection = require("./connection.js");

var orm = {
  all: function(tableInput, res) {
    connection.query('SELECT * FROM ' + tableInput, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(res);
      res(result)
    })
  },
  update: function(tableInput, condition, res){
    connection.query('UPDATE '+tableInput+' SET devoured = true WHERE id='+condition+';',function(err, result) {
      if (err)throw err;
      console.log(result);
      res(result)
    })
  },
  create: function(tableInput, val, res) {
    connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result) {
      if (err) {
        throw err;
      }
      console.log(res);
      res(result)
    })
  }
  }


module.exports = orm;
