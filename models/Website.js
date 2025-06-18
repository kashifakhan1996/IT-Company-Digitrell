module.exports={  
	
	getHeaderMenu:function()
	{	
		  
		return header;
	}, 
	getComments:function(data,callback)
	{	 
		return [];
		
		const comments=[
			{
				"rating":5,
				"name":"Albert",
				"team":"marketing team",
				"icon":nodeSiteUrl+"/website/images/testimonial/mitech-testimonial-avata-02-90x90.jpg",
				"content":"<p>This is the best company I have ever worked with<br>there is too much to learn<br>new technologies to explore</p>"
			 
			},
			{
				"rating":5,
				"name":"Greata shwan",
				"team":"designing team",
				"icon":nodeSiteUrl+"/website/images/testimonial/mitech-testimonial-avata-03-90x90.jpg",
				"content":"<p>This is the best company I have ever worked with<br>there is too much to learn<br>new technologies to explore</p>"
			 
			}
			,
			{
				"rating":4,
				"name":"Malingo",
				"team":"sales team",
				"icon":nodeSiteUrl+"/website/images/testimonial/mitech-testimonial-avata-04-90x90.jpg",
				"content":"<p>This is the best company I have ever worked with<br>there is too much to learn<br>new technologies to explore</p>"
			 
			}
		]; 
		return comments; 
	}
	  
}; 