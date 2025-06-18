//var sync = require('synchronize');
const table = 'comments';
async function getCustomerListTest(data)
{	 
	  
	try {
		var sql='select * from '+table+' where is_deleted = 0 AND is_active = 1 AND role_id = 1';   
		return new Promise((resolve,reject)=>{
			connectPool.query(sql, (err, resp) => {
				if (err) { 
					reject(err)
				} else { 
					resolve(resp)
				}
			}) 
		})
	} finally {
      //if (connectPool && connectPool.end) connectPool.end();
    } 
}

/** 
 *  getAllData
 *  Purpose: This function is used to getAllData
 *  Pre-condition:  None
 *  Post-condition: None. 
 *  Parameters: ,
 *  Returns: void 
*/
async function getAllData() {	  
	try {   
			var sql='select * from '+table+' where is_deleted = 0 ORDER BY id DESC';    
			return new Promise((resolve,reject)=>{
				connectPool.query(sql, (err, result) => {
					if (err) { 
						reject(err)
					} else {  
						resolve(result)
					}
				})
			}).catch(function(e){
				return e; 
		});
		 
	}finally {
	 
	} 
}
 

async function getUserByid(user_id) {	  
	try { 
		if(user_id){ 

			var sql='select * from '+table+' where id = '+ user_id+' LIMIT 1';    
			return new Promise((resolve,reject)=>{
				connectPool.query(sql, (err, result) => {
					if (err) { 
						reject(err)
					} else { 
						resolve(result)
					}
				})
			})
		}else{
			return null;
		}
	} finally { 
		//if (connectPool && connectPool.end) connectPool.end();
	} 
}


/** 
 *  deleteRecord
 *  Purpose: This function is used to deleteRecord
 *  Pre-condition:  None
 *  Post-condition: None. 
 *  Parameters: ,
 *  Returns: void 
*/
async function deleteRecord(id) {	  
	try { 
		if(id){ 
			var sql='delete  from '+table+' where id = '+ id;   
			return new Promise((resolve,reject)=>{
				connectPool.query(sql, (err, result) => {
					if (err) { 
						reject(err)
					} else { 
						resolve(result)
					}
				})
			})
		}else{
			return null;
		}
	} finally {
	 
	} 
} 
/** 
 *  updateData
 *  Purpose: This function is used to updateData
 *  Pre-condition:  None
 *  Post-condition: None. 
 *  Parameters: ,
 *  Returns: json 
*/
async function updateUserData(data) {	  
	
	try { 
		if(data){  

			var sql = "UPDATE "+table+" set ? WHERE id = ?";   
			return new Promise((resolve,reject)=>{
				connectPool.query(sql,[data, data.id], (err, result) => {
					if (err) {  
						console.log(data);
						reject(err)
					} else {  
						resolve(result)
					}
				})
			}) 
		}else{
			return null;
		}
	} catch (err) {
        return err; 
    } finally {
		//if (connectPool && connectPool.end) connectPool.end();
	}   
}
/** 
 *  saveData
 *  Purpose: This function is used to saveData
 *  Pre-condition:  None
 *  Post-condition: None. 
 *  Parameters: ,
 *  Returns: json 
*/
async function saveData(data) { 
	try { 
		if(data){   
			var sql='INSERT INTO '+table+' set ? ';
			return new Promise((resolve,reject)=>{
				connectPool.query(sql,data, (err, result) => {
					if (err) { 
						console.log(data);
						reject(err)
					} else { 
						resolve(result)
					}
				})
			}) 
		}else{ 
			return null;
		}
	} finally {
		//if (connectPool && connectPool.end) connectPool.end();
	}  
} 

async function getCommentsByid(blog_id) {	  
	try { 
		if(blog_id){ 
			//var sql='select comments.*,first_name,profile_pic from comments left join users on users.id=comments.user_id where blog_id = '+ blog_id; 
			var sql='select * from '+table+' where blog_id = '+ blog_id; 

			return new Promise((resolve,reject)=>{
				connectPool.query(sql, (err, result) => {
					if (err) { 
						reject(err)
					} else { 
						resolve(result)
					}
				})
			})
		}else{
			return null;
		}
	} finally { 
		//if (connectPool && connectPool.end) connectPool.end();
	} 
}
   
   

module.exports={
	saveData,
	getUserByid,  
	updateUserData, 
	getAllData,
	deleteRecord,
		getCommentsByid,
	getUserDetail:function(data,callback)
	{	 
		var sql='select * from users LEFT JOIN bussiness_profile ON (bussiness_profile.user_id = users.id) where users.id = ?';  
		var param=[data.id];     
		connectPool.query(sql,param,function(error,result){
			if (error) {
				console.log(error);
				callback(null);
			}   
			else
			{	 
				if(result.length==0 || result==null){
					callback(false);
				}else{
					callback(result);
				} 
				//callback(result);
			} 
		});  
	},   
	getCustomerList:function(data,callback)
	{	 
		var sql='select * from users where is_deleted = 0 AND is_active = 1 AND role_id = 1';     
		connectPool.query(sql,function(error,result){
			if (error) {
				console.log(error); 
				callback(null);
			}  
			else
			{	 
				if(result.length==0 || result==null){
					callback(false);
				}else{
					callback(result);
				}  
			} 
		});  
	}, 
	updateData:function(data,callback)
	{	 
		var sql = "UPDATE users set ? WHERE email = ?";     
		connectPool.query(sql,[data, data.email], function(error,result){ 
			if (error) { 
				console.log(error);   
				callback(null);
			}  
			else 
			{	
				if(result.length==0 || result==null){
					callback(false);
				}else{
					result.id = data.id;  
					callback(result);
				}  
			} 
		});  
	},
	updateDataById:function(data,callback)
	{	 
		var sql = "UPDATE users set ? WHERE id = ?";     
		connectPool.query(sql,[data, data.id], function(error,result){ 
			if (error) {   
				console.log(error);
				callback(null);
			}  
			else 
			{	
				if(result.length==0 || result==null){
					callback(false);
				}else{
					result.id = data.id;  
					callback(result);
				}  
			} 
		});  
	}, 
	
	InitSequel:function(sequelize, type)
	{	
        var Comments = sequelize.define('comments', {
              id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
              }, 
              blog_id : { type: type.INTEGER }, 
              user_data : { type: type.STRING },  
			  comment : { type: type.STRING }, 
			  is_deleted : { type: type.INTEGER }, 
              is_active : { type: type.INTEGER },    
          },  
          {
            tableName: 'comments',
            timestamps: false
          }  
      ); 
      return Comments;
  },  
	getCustomerListTest, 
}; 
