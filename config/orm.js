const connection = require('../config/connection.js');


const orm = {

  selectAll: function (cb) {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (burger, cb) {
    const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burger], function (err, result) {
      if (err) {
        throw err;s
      }
      cb(result);
    });
  },

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

module.exports = orm;