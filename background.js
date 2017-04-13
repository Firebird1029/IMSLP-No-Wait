function updateIcon (iconType) {
	chrome.browserAction.setIcon({path: "icons/" + iconType + "/16.png"});
}

function checkUrl () {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		if (url.indexOf("imslp.org/") > -1) {
			updateIcon("colored");
		} else {
			updateIcon("transparent");
		}
	});
}

//listen for new tab to be activated
chrome.tabs.onActivated.addListener(function(activeInfo) {
    checkUrl();
});

//listen for current tab to be changed
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    checkUrl();
});

/*
 * http://stackoverflow.com/questions/6222353/chrome-extension-how-do-i-change-my-icon-on-tab-focus
 * http://stackoverflow.com/questions/6132018/how-can-i-get-the-current-tab-url-for-chrome-extension
 * https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/browserAction/
 */