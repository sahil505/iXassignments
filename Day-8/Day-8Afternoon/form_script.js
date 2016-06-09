$( document ).ready(function() {
	$("#submit-btn").click(function() {
		phoneValidator($("#phone").val());
		emailValidator($("#email").val());

	});

});

function phoneValidator(phoneNum){
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(phoneNum.match(phoneno))
	{
		$('#abc1').html("Phone Number verified").css({color:'green'});
		return true;
	}
	else{
		$('#abc1').html("Invalid number. Please enter again!").css({color:'red'});
		return false;
	}
}
function emailValidator(email){
	var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(email_format)){
		$('#abc2').html("Email Address verified").css({color:'green'});
		return true;
	}
	else{
		$('#abc2').html("Invalid email. Please enter again!").css({color:'red'});
		return false;
	}
}
