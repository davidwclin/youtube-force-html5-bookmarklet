# Force Youtube html5 Player > Bookmarklet

Create Bookmarklet with code below:

    javascript:(function()%20{var%20yt_id%20=%20yt.getConfig('DISTILLER_VIDEO_ID');var%20player_api%20=%20document.getElementById('player-api');var%20iframe%20=%20document.createElement('iframe');iframe.width%20=%20854;iframe.height%20=%20510;iframe.src%20=%20'http://www.youtube.com/embed/'%20+%20yt_id%20+%20'?html5=1&fs=1';iframe.setAttribute('allowFullScreen',%20'');iframe.setAttribute('webkitallowfullscreen',%20'');iframe.setAttribute('mozallowfullscreen',%20'');player_api.removeChild(player_api.childNodes[0]);player_api.appendChild(iframe);})()

Click on bookmarklet after flash player loads (might have to wait until ads are done).

## Motivation

* Increased play speed is really useful on long videos. 
