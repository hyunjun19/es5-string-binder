# es5-string-binder

"No more plus, No more join"

This is the simplest way to deal with strings.
This module is designed to work for ES5.
If you are using the ES6 module, please use ES6 standard specification [Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals).

This module can be used in two ways.
The first is to use function, the second is to use prototype.

# install
```bash
$ npm install --save es5-string-binder
```
```bash
$ bower install --save es5-string-binder
```

# How to use
```js
// use function and object parameter
var foo = bind('No {key1} No {key2}', { key1: 'pain', key2: 'gain' });
console.log(foo); // No pain No gain

// use function and array parameter
var bar = bind('No {0} No {1}', 'pain', 'gain');
console.log(bar); // No pain No gain
```

```js
// use prototype and object parameter
var foo = 'No {key1} No {key2}'.bind({ key1: 'pain', key2: 'gain' });
console.log(foo); // No pain No gain

// use prototype and array parameter
var bar = 'No {0} No {1}'.bind('pain', 'gain');
console.log(bar); // No pain No gain
```
