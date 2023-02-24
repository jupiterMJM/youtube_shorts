// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==


function main(){
    'use strict';
    console.log("test");
    let test = document.querySelector('.style-scope ytd-mini-guide-renderer');
    let button = test.querySelector('[aria-label="Shorts"]');
    console.log("got everything");
    button.remove();
    console.log("done");
    // Get the current time
    let now = new Date();

    // Set the start and end times
    let start = new Date();
    start.setHours(18, 0, 0); // 12pm

    // Check if the current time is between the start and end times
    if (now >= start) {
        // Launch the function here
        close();
    }
}



function close(){
    'use strict';
    console.log("Try to close window");
    window.location.href = 'about:blank';
}

function shorts(){
   if (window.location.href.indexOf('shorts') == 24){
        setTimeout(close, 100);}
    console.log(window.location.href)
}

function remove_shorts_video(){
    let liste = document.querySelectorAll("#thumbnail");
    for (var i = 0; i<liste.length; i++){
    if (liste[i].href.indexOf("shorts") == 24){
        console.log(liste[i].href);
        liste[i].parentNode.parentNode.parentNode.remove();
    }
}
}

(function() {
    'use strict';
    console.log("test");
    window.addEventListener('load', function(){setTimeout(main, 200);});
    setTimeout(close, 10*60*1000);
    setTimeout(shorts, 1000);
    setInterval(remove_shorts_video, 1000)
})();
