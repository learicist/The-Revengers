$(document).ready(function () {
	console.log('Hello');
	
	$.ajax({
	   url: "/path/to/your/script",
	   success: function(response) {
		 // here you do whatever you want with the response variable
		 alert(response);
		 
	   }
	});
	
});