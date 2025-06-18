const path = require('path');
 
var express = require('express');
//var expressLayouts = require('express-ejs-layouts');
 
//var app = express();
//added from example

global.app = express(); 
global.moment = require('moment');
const expressValidator = require('express-validator');

const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const Port = process.env.PORT  


// Required module 
//app.use(expressValidator());
app.use(cors()); 
app.use(fileUpload()); 

global.connectPool = require('./config/db.js');    
 
global.Mails = require('./controllers/MailsController');   // Mail function  

var myIP='http://localhost';
global.nodeSiteUrl = myIP+':'+Port; // node  
global.nodeAdminUrl = myIP+':'+Port+'/admin'; // node  
global.nodeMarketplaceFrontendUrl = myIP+':'+Port; // node  marketplace backend

  
global.siteUrl = myIP+':4000/constructionApp/code'; // 
global.WebsiteURL = myIP+'/constructionApp/code/';  //       

global.SITE_NAME = 'Digitrell Technologies'; //     

global.pageLimit = 10;   
global.successStatus = 200;
global.failStatus = 401; 
global.SessionExpireStatus = 500; 
global.CustomerRole = 1;  
global.ConstructorRole = 2;  
global.CURRENCY = '$';  
global.LOCATION_RANGE = 50; 

// Notification type 
global.PROJECT_NOTIFICATION_TYPE = 1; 
global.MILESTONE_UPDATE_NOTIFICATION_TYPE = 2; 
global.MILESTONE_PAYMENT_NOTIFICATION_TYPE = 3;  
global.REVIEW_NOTIFICATION_TYPE = 4;  
global.siteTitle = 'Digitrell Technologies';

var flash = require('express-flash-messages')
app.use(flash())

app.use(express.static('public'));
 
/*app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'theme/index.html'));
});*/
app.set('view engine', 'ejs');
 
//app.use(expressLayouts);
 
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
app.use(cookieParser()); 
app.use(expressSession({secret: process.env.SESSION_SECRET, resave: false,saveUninitialized: true}));  

 
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});   
app.use(bodyParser.json());  
app.use(express.urlencoded({limit: '100mb',extended: true })); 
 
global.fromEmail = process.env.HELPDESK_EMAIL; //  
global.companyEmail=process.env.COMPANY_EMAIL;
global.companyPhone=process.env.COMPANY_PHONE;
global.blogingEmail='bloginpoints@gmail.com';

const nodemailer    = require("nodemailer"); 
global.smtpTransport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
}); 

global.socialData=[
                    {'name':'facebook','label':'Facebook','url':'https://www.facebook.com/Digitrell-Technologies-104432318465681','icon':'fab fa-facebook link-icon'},
                    {'name':'twitter','label':'Twitter','url':'https://twitter.com/digitrell','icon':'fab fa-twitter link-icon'},
                    {'name':'linkedin','label':'LinkedIn','url':'https://linkedin.com/in/digitrell-technologies-b61ab2210','icon':'fab fa-linkedin link-icon'},
                    {'name':'instagram','label':'Instagram','url':'https://instagram.com/digitrell','icon':'fab fa-instagram link-icon'},
                  ];
global.headerMenu=null;
global.mostRecent=null;
global.categoryBlogs=null;

global.homeIndex=0;
//global.companyIndex=1;
global.servicesIndex=1;
global.technologiesIndex=2;
global.solutionsIndex=3;

global.dbHost=process.env.DBHOST
global.dbUser=process.env.DBUSER
global.dbPassword=process.env.DBPASSWORD
global.dbName=process.env.DBNAME


global.fullUrl=null;
 
var apiRouter = require('./routes/api');
app.use('/', apiRouter);
//added from example
 
 
app.listen(Port, () => {
    console.log('App listening on http://localhost:'+Port)
});
process.on('uncaughtException', function (err) { 
    console.log('Caught exception: ' + err);
});  
