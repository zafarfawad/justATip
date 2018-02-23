$(function() {

    $('#login-form-link').click(function(e) {
    	$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(a) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		a.preventDefault();
	});
});
// });
// // Code here handles what happens when a user submits registration form.
// // Effectively it takes the form inputs then sends it to the server to save in the DB.

// // when user clicks register-submit
// // $("#register-submit").on("click", function(event) {
// // 	event.preventDefault();
  
// // 	// input your credentials
// // 	var newUser = {
// // 	  // name from name input
// // 	  name: $("#name").val().trim(),
// // 	  // job title from jobTitle input
// // 	  jobTitle: $("#jobTitle").val().trim(),
// // 	  // hourly wage from hourlyWage input
// // 	  hourlyWage: $("#hourlyWage").val().trim(),
// // 	  // zip code from zipCode input
// // 	  zipCode: $("#zipCode").val().trim(),
// // 	  // password from password input
// // 	  password: $("#password").val().trim(),
// // 	//   confirm password from confirm-password input
// // 	  confirmPassword: $("#confirmPassword").val().trim()
// // 	};
  
// 	// send an AJAX POST-request with jQuery
// 	// $.post("api/", newUser)
// 	//   // on success, run this callback
// 	//   .then(function(data) {
// 	// 	// log the data we found
// 	// 	console.log(data);
// 	// 	// tell the user we're adding a character with an alert window
// 	// 	alert("Adding user...");
// 	//   });
  
// 	// empty each input box by replacing the value with an empty string
// 	$("#name").val("");
// 	$("#jobTitle").val("");
// 	$("#hourlyWage").val("");
// 	$("#zipCode").val("");
// 	$("#password").val("");
// 	$("#confirmPassword").val("")
  
//   });
