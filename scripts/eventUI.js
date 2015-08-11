$(document).ready(function(){
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
				logger = new Logger("#logs");
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
})