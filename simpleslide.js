/*
*
* @cbertelegni
* Github: https://github.com/cbertelegni/Simple-slide.js
* requiere jquery
* optional jquery.easing
*
*/

function simple_slide(app){
		app.lis=$("li", app.ul);
		app.w= $(app.lis[0]).width();
		app.count_li = app.lis.length; 
		app.wContent= app.count_li * app.w;
		app.ul.css({ // set width para el ul
			"width": app.wContent
		});
		app.marginUl;
		app.li_active;
		app.next.click(function(){
			 moverUl(1);
			 return false;
		});
		app.prev.click(function(){
			 moverUl(0);
			 return false;
		});
		validaMarginUl();
	function moverUl(btn){
		if (btn) { //next
			var marginLeft="-="+app.w;
		}else{ // prev
			var marginLeft="+="+app.w;
		};
		app.beforeslide ? app.beforeslide() : 0;
		app.ul.stop(0,1).animate({"margin-left": marginLeft},  500, app.efecto_animacion, function(){
			validaMarginUl();
			app.afterslide ? app.afterslide() : 0;
		});
	}
	function validaMarginUl(){
		app.marginUl = parseInt(app.ul.css("margin-left"));
		
		if(0 <= app.marginUl){
			app.ul.stop(0, 1).animate({"margin-left": 0}, 100);
			app.prev.hide();
			setLiActive();
			console.log("1")
		}else{
			app.prev.show();
		}
		if((app.marginUl + app.wContent) <= app.w ){
			app.ul.stop(0, 1).animate({"margin-left": (app.w -app.wContent)}, 100);
			app.next.hide();
			setLiActive();
			console.log("2")
		}else{
			app.next.show();
		}
		setLiActive();
		console.log("3")
	};
	function setLiActive(){
		app.li_active = app.lis[-app.marginUl / app.w];
	};
}