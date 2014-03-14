Simple-slide.js
===============

This is a simple template for slide.js


## Libraries

* [Jquery](http://api.jquery.com/)
* [Jquery.easing](http://gsgd.co.uk/sandbox/jquery/easing/)

## Explaple


### CSS

```css
	body, html, *{padding: 0;border: none} /*reset*/
	#app {position: relative; overflow: hidden; }
	#app, div#slide, ul#list li {width: 640px;  height: 480px } /* size app */
	div#slide { overflow: hidden; left:30px; }
	ul#list { overflow: hidden;}
	ul#list li { overflow: hidden; float: left; }
	div#app a.btn { display: none;}
	a.btn { position: absolute; top: 30px; display: inline-block; padding: 5px 10px; background: rgba(100, 100, 100, 0.4); color: #fff; cursor: pointer; border-radius: 4px;}
	a.btn:hover { background: rgba(100, 100, 100, 0.8); }
	a.prev { left: 0}
	a.next { right: 0}

```

###Javascript

```javascript
	$(function(){
		var config= { // config slide
			"ul" : $("ul#list"),
			"next":$("a.next"),
			"prev":$("a.prev"),
			"efecto_animacion":"easeInOutElastic"
		}

		var slide= simple_slide(config); //start slide
```


