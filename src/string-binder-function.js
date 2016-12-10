/**
 * var objectTest = "No {key1} No {KEY_2}";
 * var arrayTest = "No {0} No {1}";
 *
 * console.log(bind(objectTest, { key1: 'pain', KEY_2: 'gain' })); => No pain No gain
 * console.log(bind(arrayTest, 'pain', 'gain')); => No pain No gain
 */
var bind = function(str) {
	if (arguments.length === 0) { return ''; }
	if (arguments.length === 1) { return String(str); }

	var param;
	// arguments[0] == JSON
	if (arguments.length === 2 && typeof arguments[1] === 'object' && !('length' in arguments[1])) {
		param = arguments[1];
	// arguments == array
	} else {
		param = Array.prototype.slice.call(arguments, 1);
	}

	var ret = str.replace(/\{[A-Za-z0-9\_\.]+\}/g, function(key, ki){
		val = param[key.substring(1, key.length - 1)];
		if (val === undefined || val === null) { val = ''; }

		return val;
	});

	return ret;
}

module.exports = bind;
