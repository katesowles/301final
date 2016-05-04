(function(module) {
  function userLocation(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  userLocation.all = [];

  // callback function for new data inserted into database.  creates a function
  // that merges the data w/ weather data then passes that function as a callback
  // to the query.
  userLocation.merge = function(id, result, tx) {
    var locId = result.insertId;
    var cb = function(row) {
      weather.updateData(row[0], locationView.display);
    };
    userLocation.findWhere ('id', locId, cb);
  };


  userLocation.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS locations (' +
        'id INTEGER PRIMARY KEY, ' +
        'locationName VARCHAR(255) NOT NULL, ' +
        'streetAddress VARCHAR(255) NOT NULL, ' +
        'city VARCHAR(60) NOT NULL, ' +
        'state VARCHAR(2) NOT NULL, '+
        'zipcode VARCHAR(10) NOT NULL);',
      callback
    );
  };

  userLocation.truncateTable = function(callback) {
    webDB.execute(
      'DELETE FROM locations;',
      callback);
  };

  userLocation.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          sql:'INSERT INTO locations (locationName, streetAddress, city, state, zipcode) VALUES (?, ?, ?, ?, ?);',
          data: [this.locationName, this.streetAddress, this.city, this.state, this.zipcode]
        }
      ], callback);
  };

  userLocation.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          sql: 'DELETE FROM locations WHERE id = ?;',
          data: [this.id]
        }
      ], callback);
  };

  userLocation.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          sql: 'UPDATE locations SET locationName = ?, streetAddress = ?, city = ?, state = ?, zipcode = ?, WHERE id = ?;',
          data: [this.name, this.address, this.city, this.state, this.zip]
        }
      ], callback);
  };

  userLocation.loadAll = function(rows) {
    rows.map(function(ele) {
      //  Passed in this manner to duplicate how webDB.execute passes the data
      //  when it's called as a callback in html5sql.js
      userLocation.merge(null,{insertId: ele.id});
    });
  };

  userLocation.fetchAll = function(callback) {
    callback = callback || function() {};
    webDB.execute('SELECT * FROM locations', function (rows) {
      if (rows.length) {
        userLocation.loadAll(rows);
        callback();
      } else {
        console.log('No data in storage');
        callback();
      }
    });
  };

  userLocation.findWhere = function(field, value, callback) {
    webDB.execute(
      [
        {
          sql: 'SELECT * FROM locations WHERE ' + field + ' = ?;',
          data: [value]
        }
      ], callback);
  };


  module.userLocation = userLocation;
})(window);
