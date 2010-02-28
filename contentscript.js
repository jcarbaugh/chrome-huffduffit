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

// var scrapeAudioTags = function(media) {
//     var elems = document.getElementsByTagName('audio');
//     for (var i = 0; i < elems.length; i++) {
//         var elem = elems[i];
//         var file = {
//             title: (elem.title) ? elem.title : null
//         };
//         if (elem.src) {
//             if (regex.test(elem.href)) {
//                 file.url = elem.src;
//             }
//         } else {
//             var sources = elem.getElementsByTagName('source');
//             for (var i = 0; i < sources.length; i++) {
//                 var source = sources[i];
//                 if (regex.test(source.href)) {
//                     file.url = source.href;
//                     break;
//                 }
//             }
//         }
//         if (file.url) {
//             media.push(file);
//         }
//     }
// };

var getAudio = function() {
    var media = [];
    scrapeATags(media);
    // scrapeAudioTags(media);
    return media;
};

chrome.extension.sendRequest(getAudio(), function(response) {});