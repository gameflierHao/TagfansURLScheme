var urlScheme = {
	val : "",
	getScheme : function(callback){
		if (typeof callback === "function") {			
			setTimeout(function() {
				window.urlSchemeValue = (window.urlSchemeValue) ? window.urlSchemeValue : "";
				callback(window.urlSchemeValue);
				window.urlSchemeValue  = "";
			}, 50);
		}
	}
};
module.exports = urlScheme;