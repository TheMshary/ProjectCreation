$(function() {

	$(".buy").on("click", function() {
		var $id = $(this).attr("id");
		var $b = $("td[id="+$id+"]").text();
		var $q = parseInt($b+"");
		$("#"+$id).html("<b>"+($q+1)+"</b>");
	});

	function create_base() {
		
		var checked = $("input[class=invcb]:checked");
		var alert_me = "";

		checked.each(function(index, element) {
			console.log("Index: "+index+"..Element: "+$(element).attr("data-id")+"\n");
		});

		//console.log(checked);

		// Check which elements are checked.


		// cashe their DOM.


		// run combine() function to combine them and print the outcome


		// without reloading page (no python), remove current inventory items and replace with new *base* items.


	}

	$("input[class=invcb]").on("click", create_base);

});