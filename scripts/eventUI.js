$(document).ready(function(){
	$.get("http://localhost:53050/api/element", function (data){
		for (var i = 0; i < data.length; i++) {
			var template = '<div class="element" id="'+ data[i].Name +'"><div class="left"><img src="' + data[i].Image + '"class="elementImg"></div>';
			template += '<div class="right"><div class="ElementNameLabel"><label>' + data[i].Title + '</label></div>';
			if (data[i].DefaultValue) {
				template += '<div class="ElementValueInput"><input type="' + data[i].InputType + '" value="' + data[i].DefaultValue + '"></div>';
			};
			template += '</div>';
			$(".elementsBar").append(template);
		}
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
	});
	var canvas, logger;
	$("#start").bind({
		click: function(){
			if (canvas) {
				canvas.clear();
			}
			else{
				canvas = new Canvas("cnvs");
			}

			if (logger) {
				logger.clear();
			}
			else{
				var logger = new Logger("#logs");
			}			
			var robot = new Robot();
			var elements = $("#programm").children(".element");
			var programm = new Programm(robot, canvas, elements, logger);
			programm.process();												
		}
	});
	$("#clearProgramm").bind({
		click: function(){
			$("#programm").empty();
		}
	});
	$("#save").bind({
		click: function(){
			var dataURL = canvas.getDataUrl();
    		document.location.href = dataURL;
		}
	});
	$("#clear").bind({
		click: function(){
			canvas.clear();
		}
	});
	$("#spinner")
		.hide()
		.ajaxStart(function() {
			$(this).show();
		})
		.ajaxStop(function() {
			$(this).hide();
		});
})