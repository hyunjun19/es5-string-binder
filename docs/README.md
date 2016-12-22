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
<p data-height="265" data-theme-id="0" data-slug-hash="BQEmzK" data-default-tab="result" data-user="hj-park" data-embed-version="2" data-pen-title="es5-string-binder-function" class="codepen">See the Pen <a href="http://codepen.io/hj-park/pen/BQEmzK/">es5-string-binder-function</a> by HJ.Park (<a href="http://codepen.io/hj-park">@hj-park</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

```js
// use prototype and object parameter
var foo = 'No {key1} No {key2}'.bind({ key1: 'pain', key2: 'gain' });
console.log(foo); // No pain No gain

// use prototype and array parameter
var bar = 'No {0} No {1}'.bind('pain', 'gain');
console.log(bar); // No pain No gain
```
<p data-height="265" data-theme-id="0" data-slug-hash="WoWXmd" data-default-tab="js,result" data-user="hj-park" data-embed-version="2" data-pen-title="es5-string-binder-prototype" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/hj-park/pen/WoWXmd/">es5-string-binder-prototype</a> by HJ.Park (<a href="http://codepen.io/hj-park">@hj-park</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

