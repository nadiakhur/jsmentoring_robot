function Robot(x, y, angle, color, width, penPosition){
	this._x = x;
	this._y = y;
	this._angle = angle;
	this._color = color;
	this._width = width;
	this._penPosition = penPosition;
}

Robot.prototype.changeCoord = function(lengthLine) {
	this._x = parseInt(this._x) + +lengthLine * Math.cos(this._angle * Math.PI / 180);
	this._y = parseInt(this._y) + +lengthLine * Math.sin(this._angle * Math.PI / 180);
}

Robot.prototype.changeAngle = function(newAngle) {	
	this._angle = parseInt(this._angle) + parseInt(newAngle);
}

Robot.prototype.changeColor = function(newColor) {
	this._color = newColor;
}

Robot.prototype.changeWidth = function(newWidth) {
	this._width = parseInt(newWidth);
}

Robot.prototype.setPosition = function(position) {
	this._penPosition = position;
}

Robot.prototype.getX = function() {
	return this._x;
}

Robot.prototype.getY = function() {
	return this._y;
}

Robot.prototype.getAngle = function() {
	return this._angle;
};

Robot.prototype.getColor = function() {
	return this._color;
}

Robot.prototype.getPenPosition = function() {
	return this._penPosition;
};

Robot.prototype.getWidth = function() {
	return this._width;
};