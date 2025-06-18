const controller = 'main'; 

var Products = require.main.require('./models/Blogs');  
var BlogImages = require.main.require('./models/BlogImages');
var Website = require.main.require('./models/Website');
  
/** 
 *  list
 *  Purpose: This function is used to show listing of all arecord
 *  Pre-condition:  None
 *  Post-condition: None. 
 *  Parameters: ,
 *  Returns: json   
*/

headerMenu=[
    {
        'title':'Home',
        'url':nodeSiteUrl+'/home'
    },
    /*{
        'title':'Company',
        'url':'javascript:void(0)',
        'children':[
           
            {
            'title':'Career',
            'url':nodeSiteUrl+'/career'
            },
            {
            'title':'Faqs',
            'url':nodeSiteUrl+'/faqs'
            },
            
            {
            'title':'Pricing Plans',
            'url':nodeSiteUrl+'/pricing-plans'
            }
        ]
    },*/
    {
        'title':'IT Services',
        'url':nodeSiteUrl+'/services/'+servicesIndex,
        'children':[
            {
            'title':'Website Development',
            'url':nodeSiteUrl+'/services/'+servicesIndex,
            'icon':'soft-s3-01.png',
            'text':'We provide the most responsive and functional ERP Soltions for companies and businesses worldwide.',
            'children':[
                {
                'title':'eCommerce Design',
                'url':nodeSiteUrl+'/ecommerce-development'
                },
                {
                'title':'Small Business Design',
                'url':nodeSiteUrl+'/smallbusiness-development'
                },
                {
                'title':'Corporate Design',
                'url':nodeSiteUrl+'/corporate-development'
                },
                {
                'title':'WebApp Development',
                'url':nodeSiteUrl+'/webapp-development'
                },
               
              ]
            },
            {
                'title':'Mobile Development',
                'url':nodeSiteUrl+'/services/'+servicesIndex,
                'icon':'soft-s3-07.png',
                'text':'We provide the most responsive and functional Mobile app development',
                'children':[
                    {
                    'title':'Android Development',
                    'url':nodeSiteUrl+'/android-development'
                    },
                    {
                    'title':'iOS Development',
                    'url':nodeSiteUrl+'/ios-development'
                    }
                   
                  ]
            },
            {
                'title':'Digital Marketing',
                'url':nodeSiteUrl+'/services/'+servicesIndex,
                'icon':'soft-s3-02.png',
                'text':'We provide detaled report for business growth and seo for your projects',
                'children':[
                    {
                    'title':'SEO Services',
                    'url':nodeSiteUrl+'/seo-services'
                    },
                    {
                    'title':'Social Media Maketing',
                    'url':nodeSiteUrl+'/social-media-marketing'
                    },
                    {
                    'title':'Content Marketing',
                    'url':nodeSiteUrl+'/content-marketing'
                    }
                   
                  ]
            },
            {
                'title':'Design & Branding',
                'url':nodeSiteUrl+'/services/'+servicesIndex,
                'icon':'soft-s3-03.png',
                'text':'We can help branding and marketing of your business',
                'children':[
                    {
                    'title':'Logo Design',
                    'url':nodeSiteUrl+'/logo-design'
                    },
                    {
                    'title':'Brochure Design',
                    'url':nodeSiteUrl+'/brochure-design'
                    },
                    {
                    'title':'Pemplate Design',
                    'url':nodeSiteUrl+'/pemplate-design'
                    }
                   
                  ]
            }
        ]
    },
    {
        'title':'Technologies',
        'url':nodeSiteUrl+'/services/'+technologiesIndex,
        'children':[
            {
            'title':'Web Technologies',
            'url':nodeSiteUrl+'/services/'+technologiesIndex,
            'icon':'mitech-box-image-style-01-image-03-100x108.png',
            'text':'We provide the most responsive and functional website for your businesses worldwide.',
            'children':[
                {
                'title':'NodeJs Technologies',
                //'url':nodeSiteUrl+'/nodejs-technologies'
                'url':'javascript:void(0)'
                },
                {
                'title':'Angular Technologies',
               // 'url':nodeSiteUrl+'/angularjs-technologies'
               'url':'javascript:void(0)'
                },
                {
                'title':'ReactJs Technologies',
               // 'url':nodeSiteUrl+'/reactjs-technologies'
               'url':'javascript:void(0)'
                },
                {
                'title':'PHP Development',
                //'url':nodeSiteUrl+'/php-development'
                'url':'javascript:void(0)'
                },
               
              ]
            },
            {
                'title':'Mobile Development',
                'url':nodeSiteUrl+'/services/'+technologiesIndex,
                'icon':'mitech-box-image-style-01-image-01-100x108.png',
                'text':'We provide mobile apps for your business.',
                'children':[
                    {
                    'title':'Android Development',
                    //'url':nodeSiteUrl+'/android-development'
                    'url':'javascript:void(0)'
                    },
                    {
                    'title':'iOS Development',
                    //'url':nodeSiteUrl+'/ios-development'
                    'url':'javascript:void(0)'
                    }
                   
                  ]
            },
            {
                'title':'CMS Technologies',
                'url':nodeSiteUrl+'/services/'+technologiesIndex,
                'icon':'mitech-box-image-style-06-image-03-120x120.png',
                'text':'We provide management systems for your organization.',
                'children':[
                    {
                    'title':'Wordpress',
                    //'url':nodeSiteUrl+'/wordpress-development'
                    'url':'javascript:void(0)'
                    },
                    {
                    'title':'Drupal',
                    //'url':nodeSiteUrl+'/drupal-development'
                    'url':'javascript:void(0)'
                    },
                    {
                    'title':'Jumla',
                   // 'url':nodeSiteUrl+'/jumla-development'
                   'url':'javascript:void(0)'
                    }
                   
                  ]
            },
            {
                'title':'eCommerce Technologies',
                'url':nodeSiteUrl+'/services/'+technologiesIndex,
                'icon':'soft-s1-01-120x120.png',
                'text':'We provide the most responsive and functional eCommerce plugins and tools for shopify,eCart businesses worldwide.',
                'children':[
                    {
                    'title':'Shopify Development',
                    'url':'javascript:void(0)'
                    },
                    {
                    'title':'Ecart Developmenet',
                    'url':'javascript:void(0)'
                    },
                    {
                    'title':'Bigcommerce',
                    'url':'javascript:void(0)'
                    }
                   
                  ]
            }
        ]
    },
    {
        'title':'IT Solutions',
        'url':nodeSiteUrl+'/solutions',
        'children':[
            {
            'title':'Billing / ERP Solutions',
            'url':nodeSiteUrl+'/service-details/erp-solutions',
            'icon':'mitech-box-image-style-05-image-05-60x60.png',
            'text':'We provide the most responsive and functional ERP Soltions for companies and businesses worldwide.'
            },
            {
            'title':'eLearning Solutions',
            'url':nodeSiteUrl+'/service-details/elearning-solutions',
            'icon':'mitech-box-image-style-06-image-01-120x120.png',
            'text':'We provide the most responsive and functional eSchooling Soltions for students.'
                
            },
            /*{
                'title':'Billing Solutions',
                'url':nodeSiteUrl+'/service-details/billing-solutions',
                'icon':'mitech-box-image-style-05-image-02-60x60.png',
                'text':'We provide the most responsive and functional Billing Soltions for companies and businesses worldwide.'
               
            },*/
            {
                'title':'Management Solutions',
                'url':nodeSiteUrl+'/service-details/management-solutions',
                'icon':'mitech-box-image-style-05-image-04-60x60.png' ,
                'text':'We provide the most responsive and functional Management Soltions for companies and businesses worldwide.'
                            
            }
        ]
    },
    {
        'title':'Blog',
        'url':nodeSiteUrl+'/website/blogs'
    },
    {
        'title':'About',
        'url':nodeSiteUrl+'/about'
    },
    {
        'title':'Contact',
        'url':nodeSiteUrl+'/contact'
    }
];

async function home(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
        data = {};    
        action = 'home'; 
        //get latest blogs
        if(mostRecent==null || !mostRecent){
           mostRecent = await Products.getMostRecent();  
           if(mostRecent){ 
                for (const item of mostRecent) { 
                    blogImage = await BlogImages.getDefaultImage(item.id);  
                    if(blogImage.length > 0){ 
                        item.default_image = nodeSiteUrl+'/upload/blog_images/'+blogImage[0].image; 
                    }else{
                        item.default_image = noImageProduct; 
                    }  
                };     
            }
        }  

        res.render('home',{
            page_title:" Digitrell",
            data:data,
            featured_blogs:mostRecent
        }); 
       
    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.home = home;

async function about(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
        
        var comments =Website.getComments();
        res.render('about-us',{
            page_title:" Digitrell",
            comments:comments
           
        }); 
        

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.about = about;

async function contact(req,res){
    try{

        var errorData={}; 
        if (req.method == "POST") { 
            var input = JSON.parse(JSON.stringify(req.body)); 

            const { Validator } = require('node-input-validator');        
            const v = new Validator(req.body, {
                name: 'required',
                email: 'required',
                subject: 'required',
                message: 'required'
              });
             
            v.check().then((matched) => {
             
                if (!matched) {
                    if(v.errors){
                        for(var attributeName in v.errors){
                            var field1 = String(attributeName);  
                            errorData[field1] = v.errors[attributeName].message;   
                            
                        }  
                        console.log(errorData);
                        res.json(errorData)                          
                    }         
                  
                   
                }else{
                    var hbs = require('nodemailer-express-handlebars');
                    let HelperOptions = {
                                            from: '"'+input.name+'" <'+input.email+'>',
                                            to: companyEmail,
                                            subject: input.subject,
                                            html:'<h1>Query</h1><p>Name: '+input.name+'<br/>Email: '+input.email+'<br/>Message:'+input.message+'</p>'
                                            /*template: 'email/template/contact_email',
                                            context: {
                                              name:input.name,
                                              email: input.email,
                                              message: input.message
                                            }*/
                                        };
                        smtpTransport.sendMail(HelperOptions, (error,info) => {
                            if(error) {
                              console.log(error);
                              res.json(error);
                            }
                            console.log("email is send");
                            console.log(info);
                            res.json(info)
                        });
                  
                    var msg = ' email sent successfully.';  
                    req.flash('success', msg)   
                    res.locals.message = req.flash(); 
                      
                }
            }); 
            res.set('content-type' , 'text/html; charset=mycharset'); 
            res.redirect(nodeSiteUrl+'/contact-us'); 
                    
        }else{
            res.set('content-type' , 'text/html; charset=mycharset'); 
            res.render('contact-us',{
                page_title:" Digitrell",
                errorData:errorData
               
            });
        }

        // 
        

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.contact = contact;

async function services(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
        var index=req.params.id;
        const data=headerMenu[index];
        const services=await data.children;
        res.render('services',{
            page_title:" Digitrell Services",
            title:'IT Services',
            services:services
           
        }); 
        

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.services = services;

async function serviceDetails(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
        
        const serviceName=req.params.serviceName;
        //const services=headerMenu[servicesIndex];
        if(serviceName=='elearning-solutions'){
            var template='elearning-solutions';
        }else if(serviceName=='erp-solutions'){
            var template='erp-solutions';
        }
        else if(serviceName=='management-solutions'){
            var template='management-solutions';
        }
        else{
            var template='services-details';
        }
        res.render(template,{
            page_title:" Digitrell Services"
           
        }); 
        

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.serviceDetails = serviceDetails;

async function solutions(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
       // const services=null;
        const data=headerMenu[solutionsIndex];
        const services=await data.children;
        
        res.render('services',{
            page_title:" Digitrell Solutions",
            title:data.title,
            services:services
           
        }); 
        

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.solutions = solutions;

async function works(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
        res.render('works',{
            page_title:" Digitrell"
           
        }); 
        

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.works = works;

