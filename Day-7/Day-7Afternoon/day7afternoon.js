// change the color of the text in the div with class "color-div" to red
function changeColor() {
	$('.color-div').css({
		"color":"red",
		"font-size":"20px"
	});	
}

// add the word "blue" to the div with class "add-div"
function addToDiv() {
	$('.add-div').html('My favorite color is blue');
}

// add a title to the page
function addTitle() {
	$('.title-div').html('Old Title').css({
		"text-align":"center",
		"font-size":"20px"
	});
}

// alert the text in the selected item of the dropdown
function getSelected() {
	var dropdown_alert = $('select').val();
	alert(dropdown_alert);
}

// change the title to be "New Title"
function changeText() {
	$('.title-div').html('Web-Dev is so Cool!').css({
		"color":"#337ab7",
		"text-align":"center",
		"font-weight":"bold",
		"background-color":"pink",
		"font-size":"40px",
		"margin-right":"450px",
		"margin-left":"450px",
	});

}

$(document).ready(function() {

	addToDiv();
	addTitle();

  $('.the-button').click(function(){ 
    //hint: what goes in here?
    changeColor(); 
	});

  $('.get-selected').click(function(){ 
    //hint: what goes in here?
    getSelected(); 
	});

  $('.text-changer').click(function(){ 
    //hint: what goes in here?
    changeText();
	});
	


  $(".trio").click(function (e) {
    //hint: look at the currentTarget property
    var get_id = $(this).attr('id'); 
    $(".clicked-id").html("You clicked on id: " + get_id);
  });

});