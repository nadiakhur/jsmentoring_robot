function Canvas () {
	this.canvas = document.getElementById("cnvs");
	this.ctx = this.canvas.getContext('2d');
}

Canvas.prototype.draw = function(oldCoordX, oldCoordY, newCoordX, newCoordY, color, width) {
	this.ctx.beginPath();
	this.ctx.lineWidth = width;
	this.ctx.strokeStyle = color;
	this.ctx.moveTo(oldCoordX, oldCoordY);
	this.ctx.lineTo(newCoordX, newCoordY);
	this.ctx.stroke();
	this.ctx.closePath();
}

Canvas.prototype.clear = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Canvas.prototype.getDataUrl = function() {
	return this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
};