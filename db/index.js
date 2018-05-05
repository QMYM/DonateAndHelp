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

module.exports = db;
