function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString()
	} else
		var expires = "";
	document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/"
}
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length)
	}
	return null
}

function eraseCookie(name) {
	createCookie(name, "", -1)
}
createCookie('visual', 'special');
$(function() {

	var $doc = $(document),
		btn = $doc.find('.js-stats-list-item'),
		link, ajax, inn, playListArr, playIndex = 0;

	// Local copy of jQuery selectors, for performance.
	var my_jPlayer = $("#jquery_jplayer");

	// Some options
	var opt_play_first = false, // If true, will attempt to auto-play the default track on page loads. No effect on mobile devices, like iOS.
		opt_auto_play = true, // If true, when a track is selected, it will auto-play.
		opt_text_playing = "Now playing", // Text when playing
		opt_text_selected = "Track selected"; // Text when not playing

	// A flag to capture the first track
	var first_track = true;

	// Change the time format
	$.jPlayer.timeFormat.padMin = false;
	$.jPlayer.timeFormat.padSec = false;
	$.jPlayer.timeFormat.sepMin = " min ";
	$.jPlayer.timeFormat.sepSec = " sec";

	// Initialize the play state text

	// Instance jPlayer
	my_jPlayer.jPlayer({
		ready: function() {

		},
		play: function(event) {

		},
		pause: function(event) {

		},
		ended: function(event) {
			if (playIndex == 0 || playIndex < (playListArr.length - 1)) {
				playIndex++
			} else {
				playIndex = 0
			}
			player(playIndex);
			$('.js-stats-body-music-play').removeClass('stop');

		},
		//loop: true,
		swfPath: "images/special/js",
		cssSelectorAncestor: ".jp_container",
		supplied: "mp3",
		wmode: "window"
	});


	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	function player(index, play) {
		if (play) {
			my_jPlayer.jPlayer("setMedia", {
				mp3: play
			});
			my_jPlayer.jPlayer("play");
			my_jPlayer.jPlayer("volume", 1);
		} else {
			if (playListArr.length) {
				my_jPlayer.jPlayer("setMedia", {
					mp3: playListArr[playIndex]
				});
				my_jPlayer.jPlayer("play");
				my_jPlayer.jPlayer("volume", 1);
			}
		}
	}

	function getCart(link2) {
		if (ajax) ajax.abort();
		ajax = $.ajax({
			url: link2 + "?only_card=1",
			async: false,
			success: function(data) {
				if (myo.winLast() && myo.winLast().wrapDiv.hasClass("popover-cart")) {
					myo.winLast().loadDiv.hide();
					myo.winLast().bodyDiv.html(data);
				} else {
					myo.open({
						clas: "popover-cart",
						html: data,
						afterOpen: function() {
							this.bodyDiv.html(data);
							playListArr = $('.stats-body').data('sound').split('***');
							shuffle(playListArr);
							playIndex = 0;
							player(playIndex);
							$('.stats-body-image-wrap').lightGallery({
								thumbnail: true,
								animateThumb: false,
								showThumbByDefault: false,
								subHtmlSelectorRelative: true,
								loop: true
							});
						},
						beforeClose: function() {
							ajax.abort();
						},
						afterClose: function() {
							my_jPlayer.jPlayer("stop");
						}
					});
				}
			}
		});
	}

	$(document).on('click', '.js-stats-body-music-play', function() {
		var $this = $(this),
			$sound;

		if (!$this.hasClass('stop')) {
			$sound = $this.next().attr('href');
			my_jPlayer.jPlayer("stop");
			player(0, $sound);
			$('.js-stats-body-music-play').removeClass('stop');
			$this.addClass('stop');
		} else {
			my_jPlayer.jPlayer("stop");
			$this.removeClass('stop');
		}

	});

	btn.on('click', function(e) {
		var $this = $(this),
			link = $this.data('link'),
			$sound = $this.data('sound');
		if (!isMobile) {
			getCart(link);
		} else {
			if ($this.hasClass('active')) {
				getCart(link);
			} else {
				btn.removeClass('active');
				$this.addClass('active');
			}
		}
	});

});