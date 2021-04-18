
var gettingAllTabs = browser.tabs.query({});

gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

browser.runtime.onMessage.addListener(function(msg, sender, sendResponse){
	if ( msg.request == "VuObservationsNeededVu" ) {
		var tmp = browser.storage.local.get('VuObservationsVu');
		tmp.then((res) => {
			var obsrvs = res;
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
    if (tab.url.includes("https://massar.men.gov.ma/Evaluation/GestionDesNotes/SaisiedesNotesParMatiere")) {
        browser.pageAction.setIcon({tabId: tab.id, path: "icons/32x32.png"});
        browser.pageAction.show(tab.id);
    }
}