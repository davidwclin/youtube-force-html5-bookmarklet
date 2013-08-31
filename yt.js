javascript:(function() {
	var yt_id = yt.getConfig('DISTILLER_VIDEO_ID');
	var player_api = document.getElementById('player-api');
	var iframe = document.createElement('iframe');
	iframe.width = 854;
	iframe.height = 510;
	iframe.src = 'http://www.youtube.com/embed/' + yt_id + '?html5=1&fs=1';
	iframe.setAttribute('allowFullScreen', '');
	iframe.setAttribute('webkitallowfullscreen', '');
	iframe.setAttribute('mozallowfullscreen', '');
	player_api.removeChild(player_api.childNodes[0]);
	player_api.appendChild(iframe);
})()
