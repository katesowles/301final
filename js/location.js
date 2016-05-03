(function(module) {
  function userLocation(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  userLocation.all = [];

  userLocation.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS locations (' +
        'id INTEGER PRIMARY KEY, ' +
        'name VARCHAR(255) NOT NULL, ' +
        'address VARCHAR(255) NOT NULL, ' +
        'city VARCHAR(60) NOT NULL, ' +
        'state VARCHAR(2) NOT NULL, '+
        'zip VARCHAR(10) NOT NULL);',
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
          sql:'INSERT INTO locations (name, address, city, state, zip) VALUES (?, ?, ?, ?, ?);',
          data: [this.name, this.address, this.city, this.state, this.zip]
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
          sql: 'UPDATE locations SET name = ?, address = ?, city = ?, state = ?, zip = ?, WHERE id = ?;',
          data: [this.name, this.address, this.city, this.state, this.zip]
        }
      ], callback);
  };

  userLocation.loadAll = function(rows) {
    userLocation.all = rows.map(function(ele) {
      return new userLocation(ele);
    });
  };

  userLocation.fetchAll = function(callback) {
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

  userLocation.findwhere = function(field, value, callback) {
    webDB.execute(
      [
        {
          sql: 'SELECT * FROM locations WHERE' + field + ' = ?;',
          data: [value]
        }
      ], callback);
  };

  module.userLocation = userLocation;
})(window);
