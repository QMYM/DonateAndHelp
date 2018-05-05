let db = require('../db/index')

exports.Signup=function(req,res){
	db.userSave(req.body , function(err , data){
		if(err){res.status(404).send(err)}
			res.status(200).send(data)
	})
}