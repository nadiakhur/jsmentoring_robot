function Logger(textAreaId){
	this._textareaId = textAreaId;
}

Logger.prototype.log = function(message) {
	$(this._textareaId).val($(this._textareaId).val() + message + "\n");
};

Logger.prototype.clear = function() {
	$(this._textareaId).val("");
};