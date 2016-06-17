$(document).ready(function() {
	$("#todo-input").keyup(function(e) {
		if (e.keyCode === 13) {
			addToList($("#todo-input").val());
			console.log($("#todo-input").val());
			$("#todo-input").val("");
		}
	});
	$("#clear").on('click', function(){
		$("#list").toggle();
	});
});
function addToList(value){
	var li = $("<li></li>").html(value);
	$("#list").append(li);
	$('li').on('click', function(){
		$(this).hide();
	});

}