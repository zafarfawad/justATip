// ===============================================================================================
// LOGIN AND REGISTRATION FORM 
// ===============================================================================================

$(function () {

	$('#login-form-link').click(function (e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function (a) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		a.preventDefault();
	});
});

// ===============================================================================================
// USERNAME AND PASSWORD VALIDATION 
// ===============================================================================================



// ===============================================================================================
// REGISTRATION VALIDATION 
// ===============================================================================================

$(document).ready(function () {
	$('#register-submit').click(function (e) {

		// Initializing Variables With Form Element Values
		var name = $('#name').val();
		var jobTitle = $('#jobTitle').val();
		var hourlyWage = $('#hourlyWage').val();
		var zipCode = $('#zipCode').val();
		var signup_password = $('#signup_password').val();
		var confirm_password = $('#confirm_password').val();

		// Initializing Variables With Regular Expressions
		var name_validation = /^[0-9a-zA-Z]+$/;
		var jobTitle_validation = /^[a-zA-Z]+$/;
		var hourlyWage_validation = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;
		var zipCode_validation = /^[0-9]+$/;
		var signup_password_validation = /^(?=.*\d).{4,8}$/;

		// To Check Empty Form Fields.
		if (name.length == 0) {
			// This Segment Displays The Validation Rule For All Fields
			$('#head').text("* All fields are mandatory *");
			$("#name").focus();
			return false;
		}
		// Validating Username Field.
		else if (!name.match(name_validation) || name.length == 0) {
			// This Segment Displays The Validation Rule For Username
			$('#p1').text("* Please enter letters and numbers only *");
			$("#name").focus();
			return false;
		}
		// Validating job title Field.
		else if (!jobTitle.match(jobTitle_validation) || jobTitle.length == 0) {
			// This Segment Displays The Validation Rule For jobTitle
			$('#p2').text("* For job title please enter letters and numbers only *");
			$("#jobTitle").focus();
			return false;
		}
		// Validating hourly wage Field.
		else if (!hourlyWage.match(hourlyWage_validation) || hourlyWage.length == 0) {
			// This Segment Displays The Validation Rule For Email
			$('#p3').text("* For hourly wage please enter numbers only *");
			$("#hourlyWage").focus();
			return false;
		}
		// Validating zip code Field.
		else if (!zipCode.match(zipCode_validation) || zipCode.length == 0) {
			// This Segment Displays The Validation Rule For Address
			$('#p4').text("* Please enter a valid zip code *");
			$("#zipCode").focus();
			return false;
		}
		// Validating password Field.
		else if (!signup_password.match(signup_password_validation) || signup_password.length == 0) {
			// This Segment Displays The Validation Rule for password
			$('#p5').text("* Password must be between 4 and 8 digits long and include at least one numeric digit. *");
			$("#signup_password").focus();
			return false;
		}
		// Validating confirm password.
		else if (!(signup_password === confirm_password)) {
			// This Segment Displays The Validation for confirm password
			$('#p6').text("* Password does not match. *");
			$("#signup_password").focus();
			return false;
		}  else {
			$('#p7').text("Form Submitted Successfuly!");
			return true;
		}
	});
});

// ===============================================================================================
// RESET FORM
// ===============================================================================================

function resetform() {
	document.getElementById("register-form").reset();
	}