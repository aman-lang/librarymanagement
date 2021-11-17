var mongoose = require('mongoose') ;

var db = mongoose.Schema;
var schema = new db ({
   name : {
      type : 'String' ,
      require : 'true'
   },
   admin_id : {
      type : 'String' ,
      require : 'true'
   },
   password : {
      type : 'String' ,
      require : 'true'
   },
   email : {
      type : 'String' ,
      require : 'true'
   },
   phone_no : {
      type : 'String' ,
      require : 'true'
   },
   gender : {
      type : 'String' ,
      require : 'true'
   }
});

var admin = mongoose.model('admin',schema);
module.exports = admin ;

