var availableAudio = {};

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
        if (request.length > 0) {
             availableAudio[sender.tab.id] = request;
             chrome.pageAction.show(sender.tab.id);
        }
	}
);