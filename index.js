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
  


// Required module 
//app.use(expressValidator());
app.use(cors()); 
app.use(fileUpload()); 

global.connectPool = require('./config/db.js');    
 
global.Mails = require('./controllers/MailsController');   // Mail function  


// Constants 
//global.nodeSiteUrl = 'http://192.168.1.151/constructionApp/nodeApi/'; // node  
//var myIP='http://192.168.1.10';
var myIP='http://localhost';
global.nodeSiteUrl = myIP+':4000'; // node  
global.nodeAdminUrl = myIP+':4000/admin'; // node  
global.nodeMarketplaceFrontendUrl = myIP+':4000'; // node  marketplace backend

  
global.siteUrl = myIP+':4000/constructionApp/code'; // 
global.WebsiteURL = myIP+'/constructionApp/code/';  //       

global.SITE_NAME = 'Digitrell Technologies'; //     
global.noImageUsers = myIP+'/constructionApp/code/public/upload/avtar.png';  
global.noImageConstructor = myIP+'/constructionApp/code/public/upload/No_Image_Available.png';   
global.noImageConstructor = myIP+'/constructionApp/code/public/upload/No_Image_Available.png';   
global.noImageProduct = myIP+':4000/images/No_Image_Available.png';  

global.pageLimit = 10;   
global.successStatus = 200;
global.failStatus = 401; 
global.SessionExpireStatus = 500; 
global.CustomerRole = 1;  
global.ConstructorRole = 2;  
global.SITE_URL = 'localhost:4000/constructionApp/code/';  
global.CURRENCY = '$';  
global.FIREBASE_LEGACY_KEY = 'AIzaSyCODHZEPkjPGNy-X0jdLu1i9NVRFAaeumQ';  
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
    port: 465,
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

global.dbHost='localhost';
global.dbUser='root';
global.dbPassword='';
global.dbName='construction_app_admin';

//live
/*
global.dbHost='103.212.121.75';
global.dbUser='hdjxasfo_root';
global.dbPassword='Workingwomen@123';
global.dbName='hdjxasfo_construction_app_admin';
*/

global.fullUrl=null;
 
var apiRouter = require('./routes/api');
app.use('/', apiRouter);
//added from example
 
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});
process.on('uncaughtException', function (err) { 
    console.log('Caught exception: ' + err);
});  

// Check session of logged user 
global.CheckPermission = function(req, res){  
    if(typeof req.session.user !== "undefined"){
        LoginUser = req.session.LoginUser; 
        if(LoginUser){
            return true; 
        }else{ 
            res.redirect(nodeAdminUrl+'/login'); 
        }
    }else{
        return true; 
    } 
    return true;  
}; 