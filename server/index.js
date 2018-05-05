let express = require('express');
let db = require('../db/index')
let helper = require('../helper/uitilty');
let session = require('express-session');
let bcrypt = require ('bcrypt');
let bodyParser = require('body-parser');

const app = express();
const saltRounds = 10;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
 secret: "very very secret",
 resave: true,
 saveUninitialized: true
}))


app.post('/login', function(req,res){
 var username = req.body.userName;
 var password = req.body.password;
 console.log('mais is here', username, password)
 db.Users.findOne({username:username}, function(err,data){
  if(err){
    throw err;
  }
  else {
    if (!data) {
     res.sendStatus(404);
   }
   else {
    bcrypt.compare(password, data.password, function(err,found){
      if(found) {
        helper.createSession(req,res,data.username);  
      }
      else {
        res.sendStatus(404);
      }
    })
  }

}
})
 
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`The Port : ${ PORT }`);
});