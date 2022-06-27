/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function ($) {
	var $window = $(window),
		$body = $("body"),
		$header = $("#header"),
		$titleBar = null,
		$nav = $("#nav"),
		tab = document.querySelectorAll(".tab"),
		$wrapper = $("#wrapper");

	// Breakpoints.
	breakpoints({
		xlarge: ["1281px", "1680px"],
		large: ["1025px", "1280px"],
		medium: ["737px", "1024px"],
		small: ["481px", "736px"],
		xsmall: [null, "480px"],
	});

	// Play initial animations on page load.
	$window.on("load", function () {
		var currTab = sessionStorage.getItem("path");
		console.log(currTab);

		if (currTab != null) {
			for (let i = 0; i < tab.length; i++) {
				tab[i].classList.remove("active");
			}
			tab.forEach(e => {
				var path = e.attributes.href.nodeValue
				console.log(path);
				if(path === currTab)
				{
					e.classList.add("active");
				}
			});
			
			
		}

		window.setTimeout(function () {
			$body.removeClass("is-preload");
		}, 100);
	});

	// Tweaks/fixes.

	// Polyfill: Object fit.
	if (!browser.canUse("object-fit")) {
		$(".image[data-position]").each(function () {
			var $this = $(this),
				$img = $this.children("img");

			// Apply img as background.
			$this
				.css("background-image", 'url("' + $img.attr("src") + '")')
				.css("background-position", $this.data("position"))
				.css("background-size", "cover")
				.css("background-repeat", "no-repeat");

			// Hide img.
			$img.css("opacity", "0");
		});
	}

	// Header Panel.

	// Nav.
	function onTabClick(event) {
		currTab = this.attributes.href.nodeValue;
		sessionStorage.setItem("path", this.attributes.href.nodeValue);
	}

	for (let i = 0; i < tab.length; i++) {
		tab[i].addEventListener("click", onTabClick, false);
	}
	// Title Bar.
	$titleBar = $(
		'<div id="titleBar">' +
			'<a href="#header" class="toggle"></a>' +
			'<span class="title">' +
			$("#logo").html() +
			"</span>" +
			"</div>"
	).appendTo($body);

	// Panel.
	$header.panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: "right",
		target: $body,
		visibleClass: "header-visible",
	});

	// Scrolly.
	$(".scrolly").scrolly({
		speed: 1000,
		offset: function () {
			if (breakpoints.active("<=medium")) return $titleBar.height();

			return 0;
		},
	});
})(jQuery);
