
function createDialog() {
	var json_modal = "<div class=\"w3-modal VubtnObservationsVu_box_modal\"> \
		<div class=\"w3-modal-content w3-border-purple w3-bottombar w3-card-4 w3-animate-top\"> \
			<h4 class=\"w3-container w3-padding-16 w3-purple\"> \
				<span class=\"w3-right\"> تحديد سلسلة JSON </span> \
				<span class=\"VubtnObservationsVu_box_close w3-left w3-text-hover-brown\" style=\"cursor:pointer\"><i class=\"fa fa-remove\"></i></span> \
			</h4> \
			<p class=\"w3-container w3-justify\"> \
				 المرجو لصق سلسلة JSON :  \
			</p> \
			<div class=\"w3-container w3-padding\"> \
				<textarea id=\"VubtnObservationsVu_txt\" class=\"w3-input w3-border\" rows=\"6\" style=\"resize:none\"></textarea> \
			</div> \
			<div class=\"w3-container w3-medium w3-text-deep-purple w3-hide VubtnObservationsVu_error\"> \
				<span class=\"\"><i class=\"fa fa-warning\"></i></span> \
				<span class=\"\">السلسلة المدخلة غير صحيحة.</span> \
			</div> \
			<div class=\"w3-container w3-padding\"> \
				<button type=\"button\" id=\"VubtnObservationsVu_clean\" class=\"w3-button w3-left w3-deep-purple w3-hover-purple\">إفراغ</button> \
			</div> \
		</div> \
	</div>";
	
    $("body").append(json_modal);
    
    $("#VubtnObservationsVu_clean").on("click", function() {
        $("#VubtnObservationsVu_txt").val("");
    });
	
    $(".VubtnObservationsVu_box_close").on("click", function() {
        hideDialog();
    });
    
    $(".VubtnObservationsVu_box_modal").click(function(e) {
        if ( this === e.target )
            hideDialog();
    });
    
    $("#VubtnObservationsVu_closeBtn").click(function() {
        hideDialog();
    });
}
function showDialog(toDo) {
	$(".VubtnObservationsVu_box_modal").fadeIn(500);
    if ( toDo === true ) {
        $("#VubtnObservationsVu_validate").one('click', function() {
            if ( $("#VubtnObservationsVu_txt").val() != "" )
                makeItReal(true);
        });
    }
}

function hideDialog() {
    $(".VubtnObservationsVu_box_modal").fadeOut(500);
}

$("#btnSearch").on("click", function(){
		var VuObsIsAddedVu = false;
        var config = { childList: true };
        var observer = new MutationObserver(function(){
            if ( $("#VubtnObservationsVu").length == 0 && $("#tableBody").find("input[class='Observation-control']").length > 0 ) {
                if ( !VuObsIsAddedVu && $("#btnSave").length == 1 ) {
                    VuObsIsAddedVu = true;
                    var o = $("#btnSave").clone().empty();
                    o.attr("id", "VubtnObservationsVu");
                    o.text("ملاحظـــات");
                    o.insertAfter("#btnSave");

                    $("#VubtnObservationsVu").on('click', function() {
                        if ( $(".VubtnObservationsVu_box_modal").length == 0 ) { 
                            createDialog();
                            showDialog(true);
                        }
                        else {
                            if ($("#VubtnObservationsVu_txt").val() == "")
                                showDialog(true);
                            else {
                                var __firstPage = $(".paginate_button.previous");
                                if ( __firstPage.length > 0 && !__firstPage.hasClass("disbabled") )    __firstPage.click();
                                makeItReal(true);
                            }
                        }
                    });
                }
            }
		});
        observer.observe(document.getElementById("tableBody"), config);
});

function makeItReal(doItAgain){
	var avgsJSON;
	avgsJSON = $("#VubtnObservationsVu_txt").val();
	try {
		var x = JSON.parse(avgsJSON);
		var stus = findGroup(x.Averages, $("#Classe").children("option[value='" + $("#Classe").val() + "']").text());
		var semester = $("input[id*=__IdSession]").val();
		var msg = browser.runtime.sendMessage({request: "VuObservationsNeededVu"});
		msg.then((message) => {
            var direction = ( message.response.VuObservationsVu.obsLanguage == "AR" ) ? "rtl":"ltr" ;
			for (var i = 0, l = stus.length; i < l; i++){
				var mrk = findMark(stus[i], semester);
				var theObs = getObservation(message.response, mrk);
				var t = $("td[data-name='CodeEleve']:contains('" + stus[i].massarCode + "')").siblings("td").find("input[class='Observation-control']");
                t.attr("value", theObs);
                t.css( "direction", direction );
			}
			 if ( doItAgain ) {
                var __next = $(".paginate_button.next");
                if ( __next.length > 0 && !__next.hasClass("disbabled") ) {
                    __next.click();
                    makeItReal(false);
                }
             }
		});
	}
	catch(e){
		$(".VubtnObservationsVu_error").removeClass("w3-hide");
		$("#VubtnObservationsVu_txt").one("change", function() {
			$(".VubtnObservationsVu_error").addClass("w3-hide");
		});
		showDialog(true);
	}
}

function findGroup(averagesObject, grp){
	var g;
	for(var i = 0, l = averagesObject.length; i < l; i++) {
		if ( averagesObject[i].group == grp )
			g = averagesObject[i].Students;
	}
	return g;	
}

function findMark(student, semester){
	return student.Marks[semester - 1];	
}

function getObservation(observationsObject, mark){
	var l = observationsObject.VuObservationsVu.Observations.length;
    
	for ( var i = 0, j = (observationsObject.VuObservationsVu.obsLangs).indexOf(observationsObject.VuObservationsVu.obsLanguage) / 2; i < l; i++ ) {
        var i_Obs = observationsObject.VuObservationsVu.Observations[i];
		if ( ( i_Obs.type == "interval" && mark >= parseFloat(i_Obs.start) && mark < parseFloat(i_Obs.end) ) || ( i_Obs.type == "value" && mark == parseFloat(i_Obs.start) ) ) {
            var fullObs = i_Obs.observation[j];
            var obsTab = fullObs.split("|");
            return obsTab[Math.floor(Math.random() * 100) % obsTab.length];
        }
	}
	return "";
}

browser.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    if ( msg.request == "SHOW_IT_PLEASE_IT_IS_TIME" ) {
        if ( $(".VubtnObservationsVu_box_modal").length == 0 ) {
            createDialog();
        }
        showDialog();
        sendResponse({ready: "YES"});
	}
});
