
chrome.tabs.query({currentWindow : true}, function (tabs){
    for (var i = 0; i < tabs.length; i++) {
        initializePageAction(tabs[i]);
    }
});

chrome.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
	if ( msg.request == "VuObservationsNeededVu" ) {
        var obsrvs = chrome.storage.local.get('VuObservationsVu', function(obsrvs) {
            try{
				var xtmp = obsrvs.VuObservationsVu.obsLanguage;
			}
			catch(err){
				obsrvs = initObservations();
			}
			sendResponse({response:obsrvs});
        });
        return true;
	}
});

function initializePageAction(tab) {
    if (tab.url.indexOf("https://massar.men.gov.ma/Evaluation/GestionDesNotes/SaisiedesNotesParMatiere") == 0) {
        chrome.pageAction.show(tab.id);
    }
}