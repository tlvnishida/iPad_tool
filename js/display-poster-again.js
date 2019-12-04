	$( window ).ready(function(){
		var video = document.getElementsByTagName('video')[0];
		video.addEventListener('ended', function() {
    video.load();
    video.autoplay=false;
}, false);
	});
