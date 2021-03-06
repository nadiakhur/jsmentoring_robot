function Programm(rbt, cnv, el, log){
	var robot = rbt;
	var canvas = cnv;
	var elements = el;
	var logger = log;
	var operators = [];
	var counter = 0;

	this.process = function(){
		parseCommandGroup(0, elements.length - 1);
		executeOperators();
	};

	var parseCommandGroup = function(startIndex, endIndex){
		for (var i = startIndex; i <= endIndex; i++) {			
			if (elements[i].id == "startCycle"	) {
				var value = $(elements[i]).find(":input").val();
				processCycle(i, value);
			}
			else{
				if (elements[i].id != "endCycle") {
					operators.push(elements[i]);
				}		
			}
		}
	};

	var processCycle = function(index, count) {
		var newStartIndex = index + 1;
		var newEndIndex = newStartIndex;
		var inner = 0;
		while(elements[newEndIndex].id != "endCycle" || inner > 0){
			if (elements[newEndIndex].id == "startCycle") {
				inner++;
			}

			if (elements[newEndIndex].id == "endCycle") {
				inner--;
			}

			newEndIndex++;
		}

		newEndIndex--;
		for (var i = 0; i < count - 1; i++) {
			parseCommandGroup(newStartIndex, newEndIndex);
		};
	};

	var executeOperators = function(){
		if (counter < operators.length) {
			var value;
			if($(operators[counter]).find(":input")){
				value = $(operators[counter]).find(":input").val();
			}

			switch(operators[counter].id){
				case "forward":
					if (robot.getPenPosition()) {
			 			canvas.draw(robot, value);
			 			logger.log("Робот нарисовал линию длинной " + value + ".");
			 		}
					else{
			 			robot.setX(value);
			 			robot.setY(value);
			 			logger.log("Робот переместился в координаты x:" + robot.getX() + " y:" + robot.getY() + ".");
			 		}
					break;
				case "turnRight":
					robot.setAngle(value);
					logger.log("Робот повернул направо на " + value + " градусов.");
					break;
				case "turnLeft":
					robot.setAngle(-value);
					logger.log("Робот повернул налево на " + value + " градусов.");
					break;
				case "downPen":
					robot.setPenPosition(true);
					logger.log("Робот опустил ручку.");
					break;
				case "upPen":
					robot.setPenPosition(false);
					logger.log("Робот поднял ручку.");
					break;
				case "selectColor":
					robot.setColor(value);
					logger.log("Цвет изменен. Текущее значение: " + value +".");
					break;
				case "changeWidth":
					robot.setWidth(value);
					logger.log("Ширина изменена. Текущее значение: " + value +".");
					break;
			}


			$("#xCoord").text(robot.getX().toFixed(3));
			$("#yCoord").text(robot.getY().toFixed(3));
			$("#angle").text(robot.getAngle());
			if (robot.getPenPosition()) {
				$("#penPosition").text("Да");
			}
			else{
				$("#penPosition").text("Нет");
			}
			$("#colorLine").text(robot.getColor());
			$("#widthLine").text(robot.getWidth());

			counter++;
			setTimeout(executeOperators, 1000);
		}	
	};
}