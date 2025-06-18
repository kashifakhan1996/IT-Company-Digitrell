var express = require('express');
var router = express.Router();
 

var MailsController    = require('../controllers/MailsController');   
var WebsiteBlogController    =  require('../controllers/BlogController');  
var WebsiteController    = require('../controllers/MainController');  

//website
router.get('/', WebsiteController.home); 
router.get('/home', WebsiteController.home); 
router.get('/about', WebsiteController.about); 
router.get('/contact', WebsiteController.contact);
router.post('/contact', WebsiteController.contact);
router.get('/services/:id', WebsiteController.services); 
router.get('/solutions', WebsiteController.solutions);  
router.get('/service-details/:serviceName', WebsiteController.serviceDetails);  
router.get('/works', WebsiteController.works); 
//website blogs
router.get('/website/blogs', WebsiteBlogController.home); 
router.get('/website/blogs/post', WebsiteBlogController.post); 
router.get('/website/blogs/single/:id', WebsiteBlogController.single); 
router.post('/website/blogs/addComment',  WebsiteBlogController.addComment);      
router.post('/website/blogs/sendEmail',  WebsiteBlogController.sendEmail);

module.exports = router;       
