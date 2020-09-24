const connection = require('../config/connection.js');


const orm = {

  //mysql command to select all burgers
  selectAll: function (cb) {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //mysql command to insert burger
  insertOne: function (burger, cb) {
    const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burger], function (err, result) {
      if (err) {
        throw err;s
      }
      cb(result);
    });
  },

  //mysql command to update burger
  updateOne: function (id, cb) {
   const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

    connection.query(queryString, [id], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

//Export the orm object for the model 
module.exports = orm;