

$("#prefs").on("click", function() {
    chrome.runtime.openOptionsPage();
});


$("#getJson").on("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, {request: "SHOW_IT_PLEASE_IT_IS_TIME"}, function(response) {        
            if ( response.ready == "YES" ) {
                window.close();
            }
        });
    });
});
