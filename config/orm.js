// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js` xx 

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`. xx 


//Connection 
var connection = require("../config/connection.js");














//Export 
module.exports = orm;

