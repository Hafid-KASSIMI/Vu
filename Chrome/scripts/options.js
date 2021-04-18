$(document).ready(function(){
	chrome.storage.local.get('VuObservationsVu', function(obsrvs) { 
        try{
			var xtmp = obsrvs.VuObservationsVu.obsLanguage;
		}
		catch(err){
			obsrvs = initObservations();
		}
		var selectedLanguage = obsrvs.VuObservationsVu.obsLanguage;
		fillObservationsTbl(obsrvs, selectedLanguage);
		$("#obsLang").val(selectedLanguage);
        fixDirection(selectedLanguage);

		$("#obsLang").bind("change", function(event){
			storeObservations(obsrvs, selectedLanguage);
			selectedLanguage = $(this).val();
            fixDirection(selectedLanguage);
			viewObservations(obsrvs, selectedLanguage);
			storeObservations(obsrvs, selectedLanguage);
		});
		
		$("#saveObservations").bind("click", function(event){
			storeObservations(obsrvs, selectedLanguage);
		});
    });
});

function fixDirection(selectedLanguage) {
    if ( selectedLanguage == "AR" ) {
        $("#intervals textarea").css("direction", "rtl");
    }
    else {
        $("#intervals textarea").css("direction", "ltr");
    }
}

