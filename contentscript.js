var regex = /\.(aac|m(idi|p3|4a)|ogg|pcm|wav)/i;

var scrapeATags = function(media) {
    var elems = document.getElementsByTagName('a');
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (regex.test(elem.href)) {
            var file = {
                url: elem.href,
                title: (elem.title) ? elem.title : null,
                content: elem.innerText
            };
            media.push(file);
        }
    }
};

var scrapeAudioTags = function(media) {
    var elems = document.getElementsByTagName('audio');
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (elem.src) {
            if (regex.test(elem.src)) {
                var file = {
                    title: (elem.title) ? elem.title : null,
                    url: elem.src,
                    content: elem.title || null
                };
                media.push(file);
            }
        } else {
            var sources = elem.getElementsByTagName('source');
            for (var j = 0; j < sources.length; j++) {
                var source = sources[j];
                if (regex.test(source.href)) {
                    var file = {
                        title: (elem.title) ? elem.title : null,
                        url: source.href
                    };
                    media.push(file);
                }
            }
        }
    }
};

var getAudio = function() {
    var media = [];
    scrapeATags(media);
    scrapeAudioTags(media);
    return media;
};

chrome.extension.sendRequest(getAudio(), function(response) {});