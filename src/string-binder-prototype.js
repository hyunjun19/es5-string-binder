/**
* var objectTest = "No {key1} No {KEY_2}";
* var arrayTest = "No {0} No {1}";
 *
 * console.log(jsonTest.bind(objectTest, { key1: 'pain', KEY_2: 'gain' })); => No pain No gain
 * console.log(arrayTest.bind(arrayTest, 'pain', 'gain')); => No pain No gain
 */
 String.prototype.bind = function() {
	var str = this;

	if (arguments.length === 0) { return String(str); }

	var param;
	// arguments[0] == JSON
	if (arguments.length === 1 && typeof arguments[0] === 'object' && !('length' in arguments[0])) {
		param = arguments[0];
	// arguments == array
	} else {
		param = arguments;
	}

	var ret = str.replace(/\{(.[^\}]*)\}/g, function(key, ki){
		val = param[arguments[1]];

		if (val === undefined || val === null) { val = ''; }

		return val;
	});

	return ret;
}
