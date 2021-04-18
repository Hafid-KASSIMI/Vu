

$("#prefs").on("click", function() {
    browser.runtime.openOptionsPage();
});


$("#getJson").on("click", function() {
    browser.tabs.query({active: true}).then(function(tabs){
        tabId = tabs[0].id;
        browser.tabs.sendMessage(tabId, {request: "SHOW_IT_PLEASE_IT_IS_TIME"}, function(response) {        
            if ( response.ready == "YES" ) {
                window.close();
            }
        });
    });
});
