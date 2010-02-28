var regex = /\.mp3/;

var scrapeATags = function(media) {
    var elems = document.getElementsByTagName('a');
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (regex.test(elem.href)) {
            var file = {
                url: elem.href,
                title: (elem.title) ? elem.title : null
            };
            media.push(file);
        }
    }
};

var scrapeAudioTags = function(media) {
//     var media;
//     var elems = document.getElementsByTagName('audio');
//     for (var i = 0; i < elems.length; i++) {
//         var elem = elems[i];
//         var file = {
//             title: (elem.title) ? elem.title : null;
//         };
//         if (elem.src) {
//             file.url = elem.src;
//         } else {
//             // parse individual sources
//             file.url = null;
//         }
//         media.push(file);
//     }
}

var getAudio = function() {
    var media = [];
    scrapeATags(media);
    scrapeAudioTags(media);
    return media;
};

chrome.extension.sendRequest(getAudio(), function(response) {});