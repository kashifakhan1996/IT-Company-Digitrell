let mysql = require('mysql2');
const mysqlPool = mysql.createConnection({
 host: dbHost,
    user: dbUser, 
    password: dbPassword, 
    database: dbName
});
/*
    host: '103.212.121.75',
    user: 'hdjxasfo_root',
    password: 'Workingwomen@123',
    database: 'hdjxasfo_construction_app_admin',
 */
//

  let createTodos = `create table if not exists users(
                          id int primary key auto_increment,
                          first_name varchar(255)not null,
                          last_name varchar(255)not null,
                          contact_number varchar(255)not null,
                          profile_pic varchar(255)not null,
                          password varchar(255)not null,
                          email varchar(255)not null,
                          is_active tinyint not null default 1,
                          is_deleted tinyint not null default 0,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  //
   let admin = `create table if not exists admin(
                          id int primary key auto_increment,
                          email varchar(255)not null,
                          password int not null,
                          role_id varchar(255)not null,
                          device_token varchar(50)not null,
                          device_type varchar(50)not null,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(admin, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

   let products = `create table if not exists products(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          store varchar(255)not null,
                          category_id int not null,
                          quantity int not null,
                          description varchar(255)not null,
                          price decimal(10,2)not null,
                          discount varchar(50)not null,
                          discounted_price decimal(10,2)not null,
                          display_price decimal(10,2)not null,
                          is_active tinyint not null default 1,
                          is_deleted tinyint not null default 0,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(products, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

   let category = `create table if not exists categories(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          image varchar(255),
                          slug varchar(255)not null,
                          parent_id int,
                          is_active int not null default 1,
                          is_deleted tinyint not null default 0,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(category, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });


  // front tables
  let email_templates = `create table if not exists email_templates(
                          id int primary key auto_increment,
                          subject varchar(255)not null,              
                          description varchar(255)not null,
                          slug varchar(50)not null,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(email_templates, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let bussiness_profile = `create table if not exists bussiness_profile(
                          id int primary key auto_increment,
                          overall_rating varchar(255) not null,              
                          company_name varchar(255)not null,
                          account_type varchar(50)not null,
                          category_id int not null,
                          user_id int not null,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(bussiness_profile, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let blogs = `create table if not exists blogs(
                          id int primary key auto_increment,
                          category_id int,
                          title varchar(255)not null,
                          tags varchar(255)not null,                     
                          description varchar(255),
                          images varchar(255),
                          content text not null,
                          likes int not null default 1,
                          views int not null default 1,
                          is_active tinyint not null default 1,
                          is_deleted tinyint not null default 0,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(blogs, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let blogimages = `create table if not exists blog_images(
                          id int primary key auto_increment,
                          blog_id int not null,
                          image varchar(255) not null,
                          default_image varchar(255) not null,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(blogimages, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let prodimages = `create table if not exists product_images(
                          id int primary key auto_increment,
                          product_id int not null,
                          image varchar(255) not null,
                          default_image varchar(255) not null,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(prodimages, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let comments = `create table if not exists comments(
                          id int primary key auto_increment,
                          overall_rating varchar(255),              
                          comment varchar(255)not null,
                          blog_id int not null,
                          user_data text not null,                          
                          is_active tinyint not null default 1,
                          is_deleted tinyint not null default 0,
                          created_at datetime not null default CURRENT_TIMESTAMP
                      )`;

  mysqlPool.query(comments, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let commentsalter = `ALTER TABLE comments ADD CONSTRAINT comment_blog_id FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE ON UPDATE NO ACTION`;

  mysqlPool.query(commentsalter, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  /*let comments = `ALTER TABLE `comments` ADD CONSTRAINT `comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION`;

  mysqlPool.query(comments, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });*/

  let foreignkey1 = `ALTER TABLE blog_images ADD CONSTRAINT image_blog_id FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE ON UPDATE NO ACTION`;

  mysqlPool.query(foreignkey1, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });

  let foreignkey2 = `ALTER TABLE blogs ADD CONSTRAINT blog_category_id FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE NO ACTION`;

  mysqlPool.query(foreignkey2, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results,
  });
  //ALTER TABLE `product_images` ADD CONSTRAINT `image-product-id` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION; 
//ALTER TABLE `blogs` ADD CONSTRAINT `category-id-blog` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION; 
