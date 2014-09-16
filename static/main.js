$(function() {

	$(".buy").on("click", function() {
		var $id = $(this).attr("id");
		var $b = $("td[id="+$id+"]").text();
		var $q = parseInt($b);
		$("#"+$id).html("<b>"+($q+1)+"</b>");
	});

	/*function buy_item() {
		var $id = $(this).attr("id");
		var $b = $("td[id="+$id+"]").text();
		var $q = parseInt($b);
		$($b).html("<b>"+($q+1)+"</b>");

	}*/

	function add_checked_box() {
		$("input[class=invcb]").on("click", function() {

		});

	}

	function combine(elo, elt) {
		var $fire = $("Firecb")

	}

});