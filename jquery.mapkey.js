/**
 * jQuery Key Mapper -by Sujeet <sujeetkv90@gmail.com>
 * https://github.com/sujeet-kumar/jquery-mapkey
 */

(function($){
	$.ctrl = function(key, callback, callbackContext){
		$(document).keydown(function(e){
			var returnVal = null;
			if(e.keyCode == key.charCodeAt(0) && e.ctrlKey){
				returnVal = callback.call(callbackContext || this, e);
				if(returnVal === false) return false;
			}
		});
	};
	
	$.alt = function(key, callback, callbackContext){
		$(document).keydown(function(e){
			var returnVal = null;
			if(e.keyCode == key.charCodeAt(0) && e.altKey){
				returnVal = callback.call(callbackContext || this, e);
				if(returnVal === false) return false;
			}
		});
	};
	
	$.shift = function(key, callback, callbackContext){
		$(document).keydown(function(e){
			var returnVal = null;
			if(e.keyCode == key.charCodeAt(0) && e.shiftKey){
				returnVal = callback.call(callbackContext || this, e);
				if(returnVal === false) return false;
			}
		});
	};
})(jQuery);
