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




'touch'; public_key:'pk_test_f1bdf35e9e5abf840a7caaeefe6b6de5ed387d,SECRET KEY sk_test_9369f28cc8a60025ccf2a058216b7d51932f0b0f';
tx_ref:'hooli-t-1920bbtyt';
;
'<!DOCTYPE html>'
<html;'lang'= 'e'
<head>
    <meta charset="UTF-8"/>;
    <meta name= 'Viewport' content='width=device-width, initialscale= 1.0' />;
<title>'Receive Payment'</title>;
<form></form>;
<script src= 'https://Checkout.paystack.com/v.js'></script>;
<button type='button' onClick= 'Make Payment()'>Pay Now</button>;



function makePayment() {
        PaystackCheckout({
          tx_ref: "hooli-tx-1920bbtyt",
          amount: 1000,
          currency: "NGN",
          country: "NG",
          payment_options: "card",

          // specified redirect URL
          redirect_url: "http://localhost:4001/response",

          // use customer details if user is not logged in, else add user_id to the request
          customer: {
            email: 'toby@yahoo.com',
            phone_number: "090800998622",
            name: "Seyi Adeogun",
          },
          callback: function (data) {
            console.log(data);
          },
          onclose: function () {
            // close modal
          },
          customizations: {
            title: "paystack Demo",
            description: "paystack Payment Demo",
          },
        });
      }
'const' ;path = require('path');

// ...

;app.post("/login", async (req, res) => {
//...
}

// Add the route below
,app.get("/pay", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
}

//...
//...

,app.get("/response", async (req, res) => {
  const { transaction_id } = req.query;

  // URL with transaction ID of which will be used to confirm transaction status
  const url = `https://api.paystack.com/v3/transactions/${transaction_id}/verify`;

  // Network call to confirm transaction status
  const response = await axios({
    url,
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  console.log(response.data.data)
}
//...

//importing user context 'const' ;'User' = require("./model/user")

const Wallet = require("./model/wallet")
const WalletTransaction = require("./model/wallet_transaction");
const Transaction = require("./model/transaction");

//...
app.get("/response", async (req, res) => {
 //....
});

// Validating User wallet
const validateUserWallet = async (userId) => {
  try {
    // check if user have a wallet, else create wallet
    const userWallet = await Wallet.findOne({ userId });

    // If user wallet doesn't exist, create a new one
    if (!userWallet) {
      // create wallet
      const wallet = await Wallet.create({
        userId,
      });
      return wallet;
    }
    return userWallet;
  } catch (error) {
    console.log(error);
  }
};

// Create Wallet Transaction
const createWalletTransaction = async (userId, status, currency, amount) => {
  try {
    // create wallet transaction
    const walletTransaction = await WalletTransaction.create({
      amount,
      userId,
      isInflow: true,
      currency,
      status,
    });
    return walletTransaction;
  } catch (error) {
    console.log(error);
  }
};

// Create Transaction
const createTransaction = async (
  userId,
  id,
  status,
  currency,
  amount,
  customer
) => {
  try {
    // create transaction
    const transaction = await Transaction.create({
      userId,
      transactionId: id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone_number,
      amount,
      currency,
      paymentStatus: status,
      paymentGateway: "paystack"
    });
    return transaction;
  } catch (error) {
    console.log(error);
  }
};

// Update wallet 
const updateWallet = async (userId, amount) => {
  try {
    // update wallet
    const wallet = await Wallet.findOneAndUpdate(
      { userId },
      { $inc: { balance: amount } },
      { new: true }
    );
    return wallet;
  } catch (error) {
    console.log(error);
  }
};
//...

app.get("/response", async (req, res) => {
  const { transaction_id } = req.query;

  // URL with transaction ID of which will be used to confirm transaction status
  const url = `https://api.paystack.com/v3/transactions/${transaction_id}/verify`;

  // Network call to confirm transaction status
  const response = await axios({
    url,
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const { status, currency, id, amount, customer } = response.data.data;

  // check if customer exist in our database
  const user = await User.findOne({ email: customer.email });

  // check if user have a wallet, else create wallet
  const wallet = await validateUserWallet(user._id);

  // create wallet transaction
  await createWalletTransaction(user._id, status, currency, amount);

  // create transaction
  await createTransaction(user._id, id, status, currency, amount, customer);

  await updateWallet(user._id, amount);

  return res.status(200).json({
    response: "wallet funded successfully",
    data: wallet,
  });
});

//...
//...

app.get("/wallet/:userId/balance", async (req, res) => {
  try {
    const { userId } = req.params;

    const wallet = await Wallet.findOne({ userId });
    // user
    res.status(200).json(wallet.balance);
  } catch (err) {
    console.log(err);
  }
});

//...
//...

app.get("/response", async (req, res) => {
  const { transaction_id } = req.query;

  //...

  const { status, currency, id, amount, customer } = response.data.data;

  // check if transaction id already exist
  const transactionExist = await Transaction.findOne({ transactionId: id });

  if (transactionExist) {
    return res.status(409).send("Transaction Already Exist");
  }

  //...

  return res.status(200).json({
    response: "wallet funded successfully",
    data: wallet,
  });
});
