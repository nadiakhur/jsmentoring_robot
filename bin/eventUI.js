$(document).ready(function(){
	var canvas;
	$("#start").bind({
		click: function(){
			if (canvas) {
				canvas.clear();
			}
			else{
				canvas = new Canvas();
			}		
			
			var robot = new Robot(0, 0, 0, "#000000", 1, true);
			var elements = $("#programm").children(".element");
			var value, oldX, oldY;
			elements.each(function(){
				if ($(this).children(".right").children(".inputDiv").children("input")) {
					value = $(this).children(".right").children(".inputDiv").children("input").val();
				}

				oldX = robot.getX();
				oldY = robot.getY();
				switch($(this).attr("id")){
					case "forward":
						robot.changeCoord(value);
						if (robot.getPenPosition()) {
							canvas.draw(oldX, oldY, robot.getX(), robot.getY(), robot.getColor(), robot.getWidth());
						}						
						break;
					case "turnRight":
						robot.changeAngle(value);
						break;
					case "turnLeft":
						robot.changeAngle(-value);
						break;
					case "cycle":
						break;
					case "downPen":
						robot.setPosition(true);
						break;
					case "upPen":
						robot.setPosition(false);
						break;
					case "selectColor":
						robot.changeColor(value);
						break;
					case "changeWidth":
						robot.changeWidth(value);
						break;
				}

				$("#xCoord").text(robot.getX());
				$("#yCoord").text(robot.getY());
				$("#angle").text(robot.getAngle());
				if (robot.getPenPosition()) {
					$("#penPosition").text("Да");
				}
				else{
					$("#penPosition").text("Нет");
				}
				$("#colorLine").text(robot.getColor());
				$("#widthLine").text(robot.getWidth());
			});														
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