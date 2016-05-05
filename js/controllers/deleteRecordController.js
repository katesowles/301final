(function(module) {

  var deleteRecord = {};

  deleteRecord.index = function(ctx) {
    userLocation.deleteRecord(ctx.params.id, function() {
      console.log('Record Deleted');
    });
  };

  module.deleteRecord = deleteRecord;
})(window);
