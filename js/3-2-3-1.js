function fadeAnime() {
	$(".fadeUpTrigger").each(function () {
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("fadeUp");
		} else {
			$(this).removeClass("fadeUp");
		}
	});
}

$(window).scroll(function () {
	fadeAnime();
});

$(window).on("load", function () {
	fadeAnime();
});

//===================左から右========================================

function fadeAnime2() {
	$(".fadeUpTrigger2").each(function () {
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("fadeSide");
		} else {
			$(this).removeClass("fadeSide");
		}
	});
}

$(window).scroll(function () {
	fadeAnime2();
});

$(window).on("load", function () {
	fadeAnime2();
});

//===================右から左========================================

function fadeAnime3() {
	$(".fadeUpTrigger3").each(function () {
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("fadeSide2");
		} else {
			$(this).removeClass("fadeSide2");
		}
	});
}

$(window).scroll(function () {
	fadeAnime3();
});

$(window).on("load", function () {
	fadeAnime3();
});
