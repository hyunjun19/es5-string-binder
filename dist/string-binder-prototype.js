String.prototype.bind=function(){var n=this;if(0===arguments.length)return String(n);var t;t=1!==arguments.length||"object"!=typeof arguments[0]||"length"in arguments[0]?arguments:arguments[0];var r=n.replace(/\{[A-Za-z0-9\_\.]+\}/g,function(n,r){return val=t[n.substring(1,n.length-1)],void 0!==val&&null!==val||(val=""),val});return r};