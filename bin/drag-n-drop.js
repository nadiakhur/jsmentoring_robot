$(function() {			
	$(".element").draggable({
		helper: "clone"
	});
	$(".programm").droppable({
		accept: ".element",
		activate: function () {
			$(this).removeClass("programm");
			$(this).addClass("programm-active");
		},
		deactivate: function () {
			$(this).removeClass("programm-active");
			$(this).addClass("programm");
		},
		drop: function (event, ui) {
			$(this).append(ui.draggable);
		},
	});			
})