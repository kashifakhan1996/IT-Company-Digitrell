var Request = require("request");      
var Categories = require.main.require('./models/Categories');
var Products = require.main.require('./models/Blogs');  
var BlogImages = require.main.require('./models/BlogImages'); 
var Comments = require.main.require('./models/Comments');      
const controller = 'blogs'; 
const module_name = 'Blogs';  
var express = require('express');
var router = express.Router();
var view_path ='website';
  
/** 
 *  list
 *  Purpose: This function is used to show listing of all arecord
 *  Pre-condition:  None
 *  Post-condition: None. 
 *  Parameters: ,
 *  Returns: json   
*/


async function home(req,res){
    try{

        res.set('content-type' , 'text/html; charset=mycharset'); 
        var allRecord=[];  
        action = 'home';
        
        var numPerPage = parseInt(req.query.perpage, 10) || 5;
        var page = parseInt(req.query.page, 10) || 0;

        const allrows = await Products.getTotalRows();  
        const total_pages =(allrows[0]!==undefined)?(allrows[0].count)/numPerPage:0;

        var previous =(page==0)?null:page-1;
        var next =(page+1>=total_pages)?null:page+1;
        var relatedTags = req.query.related_tags || null;
        var count=0;

        if(relatedTags!==null){
            var tags = relatedTags.split(' ');
            
            for (const tag of tags) { 
               var relproduct =await Products.getRelatedBlogs(tag);

               if(relproduct.length){
                  for(const productData of relproduct){
                    if(productData.product_id!==undefined){
                        const relproductImage = await ProductImages.getDefaultImage(productData.product_id);  
        
                        if(relproductImage.length > 0){ 
                            productData.default_image = nodeSiteUrl+'/upload/product_images/'+relproductImage[0].image; 
                        }else{
                            productData.default_image = noImageProduct; 
                        }
                        allRecord[count]=productData;
                        count+1;
                    }
                  };
               }
              
            };
            
        }else{
            allRecord = await Products.getLimitData(numPerPage,page); 
            if(allRecord.length){ 
                for (const item of allRecord) { 
                        blogImage = await BlogImages.getDefaultImage(item.id);  
                        if(blogImage.length > 0){ 
                            item.default_image = nodeSiteUrl+'/upload/blog_images/'+blogImage[0].image; 
                        }else{
                            item.default_image = noImageProduct; 
                        }  
                };
            } 

        }
        

        res.render(view_path+'/blog-list',{
            page_title:"Digitrell Blog",
            data:allRecord,
            previous:previous,
            next:next,
            total_pages:total_pages,
            numPerPage:numPerPage
        }); 

    } catch (err) {
        console.log(err);return 0;
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.home = home;

async function single(req,res){
    try{
        fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.set('content-type' , 'text/html; charset=mycharset'); 
        var action = 'single';
        var blog=[];
        var comments=[];
        var mostRecent = await Products.getMostRecent(); 
        var blogImage=[]; 
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
        if(req.params.id){
            var id =  req.params.id; 
            blog = await Products.getUserByid(id);
            comments = await Comments.getCommentsByid(id);
            if(blog){ 
                for (const item of blog) { 
                    blogImage = await BlogImages.getDefaultImage(item.id);  
                    if(blogImage.length > 0){ 
                        item.default_image = nodeSiteUrl+'/upload/blog_images/'+blogImage[0].image; 
                    }else{
                        item.default_image = noImageProduct; 
                    }  
                };     
            } 
        }
        
        res.render(view_path+'/blog-one',{
            page_title:"Digitrell Blog",
            data:blog,
            comments:comments,
            blogImage:blogImage,
            mostRecent:mostRecent
        }); 

    } catch (err) {
        console.log(err);return 0;
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.single = single;

async function addComment(req,res){
    try{
        res.set('content-type' , 'text/html; charset=mycharset'); 
        data = {}; 
        var blogList={};   
        action = 'addComment'; 
        if (req.method == "POST") { 
            var input = JSON.parse(JSON.stringify(req.body)); 

            input.user_data=  JSON.stringify(input.user_data);  

            const { Validator } = require('node-input-validator');        
            const v = new Validator(req.body, {
                blog_id: 'required',
                user_data: 'required',
                comment: 'required'
              });
            var errorData={};  
            v.check().then((matched) => {
             
                if (!matched) {
                    if(v.errors){
                        for(var attributeName in v.errors){
                            var field1 = String(attributeName);  
                            errorData[field1] = v.errors[attributeName].message;   
                            data.field1 = req.field1;
                        }                            
                    }         
                    data = input; 
                   
                }else{
                    var saveResult = '';
                    var msg =  controller+' updated successfully.';  
                    var saveResult =  Comments.saveData(input);  
                    req.flash('success', msg)   
                    res.locals.message = req.flash(); 
                    if(saveResult){     
                        res.redirect(nodeMarketplaceFrontendUrl+'/shop/blog-detail/'+input.blog_id);
                    }     
                }
            });  
                    
        }else{   
            req.flash('error', 'Invalid url.');  
            return res.redirect(nodeSiteUrl+'/'+controller+'/home');     
        } 
        res.redirect(nodeMarketplaceFrontendUrl+'/website/blogs/single/'+input.blog_id);
      // res.render('front/single'+input.blog_id,{page_title:" Single",data:blogList,controller:controller,action:action}); 

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.addComment = addComment;


async function contact(req,res){
    try{
        res.set('content-type' , 'text/html; charset=mycharset'); 
        action = 'contact'; 
        var blogList={};
        res.render('front/contact',{page_title:" Blog",data:blogList,controller:controller,action:action}); 

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.contact = contact;

async function sendEmail(req,res){
    try{
        res.set('content-type' , 'text/html; charset=mycharset'); 
        var blogList = {};    
        action = 'addComment'; 
        if (req.method == "POST") { 
            var input = JSON.parse(JSON.stringify(req.body)); 
            input.user_data=  JSON.stringify(input.user_data);  

            const { Validator } = require('node-input-validator');        
            const v = new Validator(req.body, {
                email: 'required',
                name: 'required',
                subject: 'required',
                message: 'required'
              });
            var errorData={};  
            v.check().then((matched) => {
             
                if (!matched) {
                    if(v.errors){
                        for(var attributeName in v.errors){
                            var field1 = String(attributeName);  
                            errorData[field1] = v.errors[attributeName].message;   
                            data.field1 = req.field1;
                        }                            
                    }         
                    data = input; 
                   
                }else{
                    var saveResult = '';
                    
                    //var MailConfig = require('../config/email');
                    var hbs = require('nodemailer-express-handlebars');
                    let HelperOptions = {
                                            from: '"'+input.name+'" <'+input.email+'>',
                                            to: blogingEmail,
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
                    
        }else{   
            req.flash('error', 'Invalid url.');  
            res.redirect(nodeSiteUrl+'/'+controller+'/home');     
        } 
        res.render('front/contact',{page_title:" contact",data:blogList,controller:controller,action:action}); 

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.sendEmail = sendEmail;

async function category(req,res){
    try{
        res.set('content-type' , 'text/html; charset=mycharset'); 
        data = {};    
        action = 'category'; 
        var category_id = null;
        var categoryData=[];
        var blogs={};
        var WHERECONDITION = { 
            'is_active' : 1,
            'is_deleted' : 0, 
            }
        const categoryList = await Categories.getAllData({ where : [WHERECONDITION]});  

        if(categoryList){
            for (const item of categoryList) { 
                blogs = await Products.getDataByCategory(item.id);  
                for (const blogitem of blogs) { 
                    blogImage = await BlogImages.getDefaultImage(blogitem.id);  
                    if(blogImage.length > 0){ 
                        blogitem.default_image = nodeSiteUrl+'/upload/blog_images/'+blogImage[0].image; 
                    }else{
                        blogitem.default_image = noImageProduct; 
                    } 
                };
                category_id=item.id;
                categoryData.push({'category_id':category_id,'slug':item.slug,'blog_data':blogs});

            }; 

        }
        (async()=>{
            await getWidgetData();
        })();
        res.render('front/category',{page_title:" Blog-category",data:categoryData,categoryList:categoryList,controller:controller,action:action}); 

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.category = category;

async function post(req,res){
    try{
        res.set('content-type' , 'text/html; charset=mycharset'); 
        data = {};    
        action = 'post'; 
        var postList={};
        res.render('front/category',{page_title:" Blog-post",data:postList,controller:controller,action:action}); 

    } catch (err) {
        return res.send(JSON.stringify({
            "status": failStatus,
            "message": err, 
        })); 
    } 

};   
exports.post = post;