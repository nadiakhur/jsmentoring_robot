function Robot(){
	var x = 0;
	var y = 0;
	var angle = 0;
	var color = "#000000";
	var width = 1;
	var penPosition = true;

	this.setX = function(lengthLine){
		x = parseInt(x) + +lengthLine * Math.cos(angle * Math.PI / 180);
	};

	this.getX = function(){
		return x;
	};

	this.setY = function(lengthLine){
		y = parseInt(y) + +lengthLine * Math.sin(angle * Math.PI / 180);
	};

	this.getY = function(){
		return y;
	};

	this.changeCoord = function(lengthLine){
		this.setY(lengthLine);
		this.setX(lengthLine);
	}

	this.setAngle = function(newAngle){
		angle = parseInt(angle) + parseInt(newAngle);
	};

	this.getAngle = function(){
		return angle;
	};

	this.setColor = function(newColor){
		color = newColor;
	};

	this.getColor = function(){
		return color;
	};

	this.setWidth = function(newWidth){
		width = newWidth;
	};

	this.getWidth = function(){
		return width;
	};

	this.setPenPosition = function(newPosition){
		penPosition = newPosition;
	};

	this.getPenPosition = function(){
		return penPosition;
	};
}