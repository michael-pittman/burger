var orm = require('../config/orm.js');

var burger = {
    all: function(res){
        orm.all('burgers', function(results){
            res(results);
        })
    },
    
    update: function(id, res){
        orm.update('burgers',id,res);
    },
    
    create: function(name,res){
        orm.create('burgers', name, res);
    }
}

module.exports = burger;