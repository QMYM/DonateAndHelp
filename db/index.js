var mongoose=require ("mongoose");
mongoose.connect('mongodb://localhost/Donate');
// mongoose.connect('mongodb://admin:admin@ds113700.mlab.com:13700/g-db')

var db = mongoose.connection;

db.on('error', function() {
	console.log('mongoose connection error');
});

db.once('open', function() {
	console.log('mongoose connected successfully');
});

var Schema = mongoose.Schema ; 

var users = new Schema ({
	username :{type : String} , 
	email : {type : String} ,
	password : {type : String},
	image : {type : String}
})
var Users = mongoose.model("Users" , users);

var userSave = function(data ,callBack ){
	var user = new Users(data);
	user.save(function( err , elem){
	if(err){callBack(err , null)}
		callBack(null , elem)

		})
}
module.exports.userSave =userSave ; 
module.exports.Users = Users;
