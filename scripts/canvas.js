function Canvas (canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext('2d');
}

Canvas.prototype = {
	draw: function(robot, lenghtLine){
		this.ctx.beginPath();
		this.ctx.lineWidth = robot.getWidth();
		this.ctx.strokeStyle = robot.getColor();
		this.ctx.moveTo(robot.getX(), robot.getY());
		robot.setX(lenghtLine);
		robot.setY(lenghtLine);
		this.ctx.lineTo(robot.getX(), robot.getY());
		this.ctx.stroke();
		this.ctx.closePath();
	},

	clear: function(){
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},

	getDataUrl: function(){
		return this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	}
};