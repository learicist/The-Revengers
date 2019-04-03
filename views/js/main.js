$(document).ready(function () {
	console.log('Hello');
	
	$.ajax({
	   url: "/hello_mike",
	   success: function(response) {
		 // here you do whatever you want with the response variable
		 alert(response);
		 
	   }
	});
	
});