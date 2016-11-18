/**
 * jQuery mapKey plugin
 * v 2.0
 *
 * @author Sujeet <sujeetkv90@gmail.com>
 * @link https://github.com/sujeet-kumar/jquery-mapkey
 */

(function ($) {
    $.fn.mapKey = function (key_map, callback) {
        var $el = this;
        
        var _callback = function (e) {
            var code = e.which || e.keyCode;
            var character = String.fromCharCode(code).toLowerCase();
            
            var command_keys = {'ctrl': false, 'shift': false, 'alt': false, 'meta': false};
            
            var keys = key_map.split('+');
            
            var key_count = 0;
            for (var i in keys) {
                var k = keys[i].toLowerCase();
                if (command_keys.hasOwnProperty(k)) {
                    command_keys[k] = true;
                    key_count++;
                } else if (k == character) {
                    key_count++;
                }
            }
            
            var returnVal = null;
            
            if (
                key_count == keys.length
                && command_keys.ctrl == e.ctrlKey
                && command_keys.shift == e.shiftKey
                && command_keys.alt == e.altKey
                && command_keys.meta == e.metaKey
            ) {
                returnVal = callback.call((e.target || $el), e);
                if (returnVal === false) {
                    return false;
                }
            }
        };
        
        $el.on('keydown.mapkey', _callback);
        
        return {
            'remove': function () {
                $el.off('keydown.mapkey', _callback);
            }
        };
    };
})(jQuery);
