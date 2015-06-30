$(function() {
	var removeIntent = false;
	var id = "";
	$(".elementsBar .element").draggable({
		connectToSortable: "#programm",
		helper: "clone",
		start: function(event, ui){
			$("#programm").removeClass("programm");
	 		$("#programm").addClass("programm-active");
		},
		stop: function(event, ui){
			$("#programm").removeClass("programm-active");
	 		$("#programm").addClass("programm");
		}
	});
	$("#programm").sortable({
		over: function(){
			removeIntent = false;
		},
		out: function(){
			removeIntent = true;
		},
		beforeStop: function(event, ui){
			if (removeIntent == true){
				ui.item.remove();
			}
		},
		receive: function(event, ui){
			id = ui.sender.attr("id");
		},
		update: function(event, ui){
			ui.item.attr("id", id);
		}
	});
	$("#programm").disableSelection();
})