!function(n){var o={};function e(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=o,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(i,t){if(1&t&&(i=e(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var o in i)e.d(n,o,function(t){return i[t]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,n){"use strict";function e(t,i,n,o,e){return(t-i)/(n-i)*(e-o)+o}n.r(i);var o=function(){function t(t,i,n,o,e){this._context=t,this._position={x:0,y:0},this._position.x=i,this._position.y=n,this._radius=o,this._color=e||"rgba("+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", 1)"}return t.prototype.draw=function(){var t=this._context;t.save(),t.translate(this._position.x,this._position.y),t.fillStyle=this._color,t.beginPath(),t.arc(0,0,this._radius,0,2*Math.PI),t.closePath(),t.fill(),t.restore()},t.prototype.update=function(t){},t.prototype.getPosition=function(){return this._position},t}();new(function(){function t(t){this._dots=[],this._x=0,this._y=0,this._canvas=document.querySelector(t),this._context=this._canvas.getContext("2d"),this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._canvas.focus(),1024<this._canvas.width?this._resolution=350:600<this._canvas.width&&this._canvas.width<=1024?this._resolution=250:this._resolution=150,window.requestAnimationFrame(this.frame.bind(this))}return t.prototype.frame=function(t){this._previousTime||(this._previousTime=t);var i=t-this._previousTime;this._previousTime=t,this._fps=1e3/i,this.update(i/1e3),this.draw(),window.requestAnimationFrame(this.frame.bind(this))},t.prototype.draw=function(){},t.prototype.update=function(t){for(var i=0;i<500;i++){var n=e(this._x,-this._canvas.width/this._resolution,this._canvas.width/this._resolution,0,this._canvas.width),o=e(this._y,0,10,this._canvas.height,0);this.addDot(n,o),this.nextPoint()}},t.prototype.addDot=function(t,i){var n=new o(this._context,t,i,.1);this._dots.push(n),n.draw()},t.prototype.nextPoint=function(){var t,i,n=Math.random();i=n<.01?(t=0,.16*this._y):n<.86?(t=.85*this._x+.04*this._y,-.04*this._x+.85*this._y+1.6):n<.93?(t=.2*this._x-.26*this._y,.23*this._x+.22*this._y+1.6):(t=-.15*this._x+.28*this._y,.26*this._x+.24*this._y+.44),this._x=t,this._y=i},t}())(".barnsley-fern")}]);