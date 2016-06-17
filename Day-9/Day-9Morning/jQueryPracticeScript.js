$(document).ready(function(){
	$(document).mousemove(function(e) {
		$('.move').offset({
			left: e.pageX,
			top: e.pageY + 20
		});
	});
	var count = 0;
	$(".container").click(function(){
		count += 1;
		$("#one").html(count);
	})
	$("body").keypress(function(e){
		if(e.keyCode == 103){
			console.log('g was pressed');
			$("body").css({color:'green'})
		}
		if(e.keyCode == 98){
			console.log('g was pressed');
			$("body").css({color:'blue'})
		}
	})
});
