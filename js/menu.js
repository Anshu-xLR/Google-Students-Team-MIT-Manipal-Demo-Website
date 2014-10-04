$(document).ready(function() {
	Cufon.now();
	$("#menu").height($("#menu").height() + 60);
	$(".bubble-pos0").css("bottom","130px").css("z-index","4");
	var dropFunc = function(e,ui) {
		var classList = ui.draggable.get(0).className;
		var start = classList.indexOf("bubble-pos");
		var end = classList.indexOf(" ",start);
		var curr = classList.substr(start,end-start);
		ui.draggable.draggable("destroy");
		$(this).droppable("destroy");
		ui.draggable.removeAttr("style").removeClass(curr).addClass("bubble-pos0");
		$(this).removeAttr("style").removeClass("bubble-pos0").addClass(curr);
		ui.draggable.droppable({
			drop: dropFunc
		});
		$(this).draggable({
			revert: "invalid"
		});
		ui.draggable.hide();
		$(this).hide();
		ui.draggable.fadeIn();
		$(this).fadeIn();
	};
	$(".bubble").draggable({
		revert: "invalid"
	});
	$(".bubble-intro").draggable("destroy");
	$(".bubble-intro").droppable({
		drop: function(e,ui) {
			$("#back-logo").children().eq(0).show();
			$(this).remove();
			var classList = ui.draggable.get(0).className;
			var start = classList.indexOf("bubble-pos");
			var end = classList.indexOf(" ",start);
			var curr = classList.substr(start,end-start);
			$(".bubble-pos0").removeAttr("style").removeClass("bubble-pos0").addClass(curr);
			ui.draggable.draggable("destroy");
			ui.draggable.removeAttr("style").removeClass(curr).addClass("bubble-pos0");
			ui.draggable.droppable({
				drop: dropFunc
			});
			ui.draggable.hide();
			if(curr != "bubble-pos0") {
				$("."+curr).hide();
			}
			ui.draggable.fadeIn(800);
			if(curr != "bubble-pos0") {
				$("."+curr).fadeIn(800);
			}
			$("#menu").animate({
				"height": "-=60"
			},800);
			$("#container").css("top","100%").show().animate({
				"top": "32%"
			},800);
			$("#intro").fadeOut(800,function() {
				$(this).remove();
				$("#back-logo").children().eq(0).hide();
			});
		}
	});
	$("#container").mCustomScrollbar({
		theme:"inset-2-dark",
		scrollButtons:{
			enable:true
		}
	});
});