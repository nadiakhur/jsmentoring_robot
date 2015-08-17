function Logger(textAreaId){
	this._textareaId = textAreaId;
}

Logger.prototype.log = function(message) {
	$(this._textareaId).append(message + "\n");
};

Logger.prototype.clear = function() {
	$(this._textareaId).val('blabla');
};