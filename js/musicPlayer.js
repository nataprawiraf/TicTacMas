var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
console.log(isChrome);
if (!isChrome) {
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
}
// function setCookie(c_name, value, exdays) {
//     var exdate = new Date();
//     exdate.setDate(exdate.getDate() + exdays);
//     var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
//     document.cookie = c_name + "=" + c_value;
// }

// function getCookie(c_name) {
//     var i, x, y, ARRcookies = document.cookie.split(";");
//     for (i = 0; i < ARRcookies.length; i++) {
//         x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
//         y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
//         x = x.replace(/^\s+|\s+$/g, "");
//         if (x == c_name) {
//             return unescape(y);
//         }
//     }
// }

// var song = document.getElementsByTagName('audio')[0];
// console.log(song);
// var played = false;
// var tillPlayed = getCookie('timePlayed');
// function update() {
//     if (!played) {
//         if (tillPlayed) {
//             song.currentTime = tillPlayed;
//             song.play();
//             played = true;
//         }
//         else {
//             song.play();
//             played = true;
//         }
//     }

//     else {
//         setCookie('timePlayed', song.currentTime);
//     }
// }
// setInterval(update, 1000);