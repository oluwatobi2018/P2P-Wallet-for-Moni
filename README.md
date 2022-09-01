# P2P Wallet for Moni
 A simple p2p wallet for payment
//cd desktop
//cd online_payment
'npm', init
'const';MethodChangeEvent
PaymentMethodChangeEvent.connect('mongodb://localhost:27017/online_payment')
{useNewUrlParser:true};
//code.
mkdir, <wallet-demo-with-paystack></wallet-demo-with-paystack>
init -yield
'mkdir'; modelconfig
touch; config/database.js; model ;/wallet.js model;/wallet_transaction. js;'model';/transction. js model;/user.js
'touch'; app.js ;index.js
npm; install; jsonwebtoken; doyenv; mongoose; express; bcryptjs
const mongoose= require("mongoose");
const {Mongo_Url}= process.env;
exports.connect
//connecting to the database
mongoose
.connect (Mongo_Url);
useNewUrlParser: true;
useUnifiedTopology: true;
console.log(successfullyconnectedtodatabase);
'.catch';'((error)'
console.log('database connection failed. exiting now...');
console.error(error);
process.exit(1);
//our app.js:
'(wallet-demo-with-)'
paystack/app.js;
require('dotenv,').config();
'require'; 'config';'database'.connect();
'constexpress'= require('express');
'const' ;bcrypt= require('bcryptjs');
'const';jwt=require('jsonwebtoken');
constapp = express();
app.use(express.json());
//logic here
module.exports=app;
const http= require('http');
const app= require('./app');
const server= http.createServer(app);
const {API_PORT}=process.env;
const port= process.env.PORT//API_PORT;
//Server listening
server.listen(port,'()')
console.log('Server running on port ${port}');
API_PORT=4001
'MONGO_URl'='//Your databaseURl here'
'Scripts'; 
'start'; "node index.js"
'dev'; "nodemon index.js"
'test'; 'echo\'error: no test specified\'&& exit 1'
const mongoose= require('mongoose');
const userschema= new mongoose.Schema;
    first_name; {type; String, 'default'; null}
    last_name; {type: String; 'default'; null}
Email; {type; String; unique; true} 
password; {type; String}
module.exports=mongoose.model('user', userSchema);
//importing user context
const User= require('./model/user');
//register
app.post('/register'); (req,res)
//our register logic goes here.....
//login
app.post('/login'); (req,res)
//our login logic goes here
//...
app.post('/register'); async (req,res)
//our register logic starts here
'try'
//Get user input
const{first_name, last_name, email, password}=<req className="body"></req>
//validate user input
if (!(email && password && first_name && last_name));
res.status(400).send('All input is required');
//check if user already exist
//validate if user exit in our database
const oldUser=await User.findone({email});
if (oldUser);
return res.status(409).Send('user already exist. Please Login');
//Encryt user password 
encryptedpassword=await bcrypt.hash(password,10);
//Create User in our database
const user=await.user.create;
first_name;
last_name;
email: email.toLowerCase();//sanitize: convert email to lowercase
password: encryptedPassword;
//Create token
'const'; 'token'=jwt.sign();
user_id: user._id, email;
process.env.TOKEN_KEY;
expiresIn: '1h';
//Save user token
user.token=token;
//user
res.status(200).json(user);
res.status(400).send('invalid credentials');
'catch'(err);
console.log(err);
//our login logic ends here
const walletSchema= Schema();
const Schemamodel=require('mongoose');
balance:{type:Number,'default'; 0};
userid;
type: Schema.Types.ObjectId;
required:true;
ref:'users';
{timestamps;true};
module.exports=model('wallet'); (walletSchema);
const mongoose=require('mongoose');
constwalletTransactionSchema=new mongoose.Schema;
amount;{type; Number; 'default'; 0}
//Even though user can be implied from wallet, let us
//double save it for security reasons
userid;
type: String;
ref; 'users';
required; true;
Isinflow; {type; boolean};
PaymentMethodChangeEvent;type;String;'default'; 'Paystack';
currency;
type; String;
required; [true, 'currency is required'];
Enumerator; ['NGN', 'USD', 'EUR', 'GBP'];
paymentStatus;
type; String;
Enumerator; ['Successful', 'pending', 'failed'];
'default'; 'pending';
paymentGateway;
required; [true, 'payment gateway is required'];
Enumerator; ['Paystack'];// Payment gateway might differ as the application grows
timestamps; true;
module.exports= mongoose.model('Transaction', transactionSchema);




'touch'; index.html;
'<!DOCTYPE html>'
<html;'lang'= 'e'
<head>
    <meta charset="UTF-8"/>;
    <meta name= 'Viewport' content='width=device-width, initialscale= 1.0' />;

