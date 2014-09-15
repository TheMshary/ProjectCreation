$(function() {

	$(".buy").on("click", function() {
		// Get #element value in inventory, parse to int, increment, print.
		var fire = parseInt($("#fire").text());
		$("#fire").html("<b>"+(fire+1)+"</b>");
	});

});