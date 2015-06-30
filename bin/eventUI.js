$(document).ready(function(){
	$("#start").bind({
		click: function(){
			var robot = new Robot(0, 0, 0, false, "#000000", 1);
			var elements = $("#programm").children(".element");
			for(var i = 0; i < elements.length; i++){
				switch(elements[i].id){
					case "forward":
						break;
					case "turnRight":
						break;
					case "turnLeft":
						break;
					case "cycle":
						break;
					case "downPen":
						break;
					case "upPen":
						break;
					case "selectColor":
						break;
					case "changeWidth":
						break;
				}
			}
		}
	});
	$("#clearProgramm").bind({
		click: function(){
			$("#programm").empty();
		}
	});
	$("#save").bind({
		click: function(){
		}
	});
	$("#clear").bind({
		click: function(){
		}
	});
})