$(document).ready(function () {
	console.log('Hello');
	
	
	$('#title').on({
		
		'mouseenter': function () { 
			$(this).css('cursor', 'pointer');
		},
		
		/*'click': function () {
			
			
			
		}*/
		
		
	});
	
	
	
	
	
	
	
	
	//make the call to the python script
	/*$.ajax({
	   url: "/hello_mike.py",
	   success: function(response) {
		 // here you do whatever you want with the response variable
		 alert(response);
		 
	   }
	});*/
	
});