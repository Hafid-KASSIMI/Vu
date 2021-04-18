function initObservations(){
	return {
		VuObservationsVu: {
			obsLanguage: 'FR',
            obsLangs: "##ARENFR",
			Observations: [
				{
                    start: 0, end: 0, type: "value",
                    observation: ["",
                    "*****", 
                    "*****", 
                    "*****"]
                },
				{
                    start: 0.01, end: 8, type: "interval",
                    observation: ["",
                    "سرعة تعلمك جلية ! عليك بمحاولة أخرى .. وستكلل بالنجاح حتما !|مستواك يتحسن يوما بعد يوم ! المطلــوب هو أخذ الوقت الكافي فقط !|أنا متأكد من نجاحك، إن بذلت مجهودا أكبر قليلا ..", 
                    "You understand things quickly ! Just try again .. You will surely succeed !| Your level is improving day by day ! You have just to take your time !|I am sure of your success, if you make a little more effort ..", 
                    "Tu apprends rapidemenet ! Encore une fois, Tu l'auras !|Tu t'améliores de jour en jour. Prends ton temps, tu n'es pas pressé.|Persévère ! Je suis sûr que tu réussiras !|Ne lâche pas ! Tu t'améliores ! Aie confiance en tes capacités"]
                },
				{
                    start: 8, end: 10, type: "interval",
                    observation: ["",
                    "كم كانت تفرحني مشاركتك في بناء الدرس !|تعجبني طريقتك في الإنصات للدرس ! غير أني أظن أن التعب بدأ يتسلل إليك !|من حقنا جميعا أن نخطئ ولا نكون كاملين ! عليك أخذ وقتك الكافي.|اقتربت جدا من تحقيق المبتغى ! أنا أقدر عملك الدؤوب !", 
                    "You make so happy when you participate.|I like your way of listening to the lesson ! But I think fatigue is creeping into you !|It is your right to make errors and not to be perfect ! Take your time.|You were very close to achieve the desired ! I appreciate your hard work !", 
                    "Tu me rends vraiment joyeux quand tu participes en classe|J'adore ta façon de suivre le cours ! Mais j'ai l'impression que tu commences à fatiguer|Tu as le droit de faire des erreurs et de ne pas être parfait ! Prends ton temps|Tu es presque arrivé ! J'apprécie ton travail ardu"] 
                },
				{
                    start: 10, end: 12, type: "interval",
                    observation: ["",
                    "مستواك، حقيقة، في تحسن !|أنت في الطــريق الصحيـــح !|لقد حققــت المطلــوب !|كنــتُ على يقين من فعلك إياها !|إنــه لتطور ملحوظ !|لقد كان كل شيء حسنا هذه السنة !", 
                    "Your level, in fact, is improving !|You are in the right way !|You have achieved the required !|I was sure you would do it !|It's a remarkable development !|Everything has been okay this year !", 
                    "Tu fais vraiment du progrès !|Tu es sur la bonne voie !|C'est beaucoup mieux !|Tu as compris !|Je le savais que tu arriverais !|C'est toute une amélioration !|Ça a bien été cette année !|C'est ton meilleur !"] 
                },
				{
                    start: 12, end: 14, type: "interval",
                    observation: ["",
                    "لقد لاحظت عدم بذلك كل طاقتك ومع ذلك نجحت. أنت ونحن نستحق الأفضل !|أنا على يقين بأن لديك مخزن طاقة لم تُبذَلْ هذه السنة !|مستواك يتحسن ويتطور بوتيـــــرة جيدة ! لقد نجحت بأقل جهد ممكن !", 
                    "You succeeded although you did not spend all your energy. You and we deserve the best !|I'm sure that you have an energy store not yet spent  !|Your level is improving and developing at a good pace ! You have succeeded with the least effort !", 
                    "Tu as fourni le minimum d'efforts possible et tu as réussi|Je suis sûr que tu as plus d'efforts à fournir|C'est beaucoup mieux|Ça avance bien !Tu t'appliques bien !"]
                },
				{
                    start: 14, end: 16, type: "interval",
                    observation: ["",
                    "عمل حسن ! لقد فعلتها كما يجب.|تطلب الأمر مجهودا كبيرا وقد انتصرت ونجحت في تحقيق المطلـــوب !|هذه ثمرة عمل أنجزته بإتقان !|يالها من نتيجة جيدة ! مجهوداتك فاجأتني !|هذا أمر جيد ! لقد أثمرت مجهوداتك نتيجة جيدة.", 
                    "Good work ! You did it right.|It, really, requires great effort.. You have, finally, won and succeeded in achieving the required !|This is the fruit of a work that you have done perfectly !|What a good result ! Your efforts surprised me !|This is good! Your efforts have yielded a good result !", 
                    "Bon travail ! Tu l'as fait comme il faut|Ça t'a demandé un grand effort et tu as réussi|Merci ! C'est du travail bien fait !|Tes efforts me surprennent ! C'est magnifique !|Tes efforts portent leurs fruits !"]
                },
				{
                    start: 16, end: 18, type: "interval",
                    observation: ["",
                    "هذا عمل جيد جدا ! حفظك الله.|إنه لأمر ممتع تدريس أمثالك ! شكرا لك !|رائــــع ! كم أحببت الاشتغال معك !|جميل جـــدا ! لديك طــريقة جيدة في التحصيل !", 
                    "This is a very good job ! God bless you !|It's pleasant to teach students like you ! Thank you !|Great ! I loved so much to work with you !|Very beautiful ! You have a good way of studying !", 
                    "Très bon travail ! Que Dieu te bénisse|C'est vraiment agréable d'enseigner un élève comme toi !|Génial ! J'ai beaucoup aimé travailler avec toi|Formidable ! Tu as une bonne méthode !"]
                },
				{
                    start: 18, end: 20, type: "interval",
                    observation: ["",
                    "عمل ممتاز،ممتاز،ممتــــاز ! وفقك الله.|لقد حققت هذا عن جدارة، وأنا فخور جدا بتدريسك !|ممتاز، ممتاز، ممتــــاز ! أنا أقدر مجهوداتك الكبيرة التي أبلغتك هذا المقام.", 
                    "Excellent work ! Good luck.|You have done this well, and I am very proud of being your teacher !|Amazing work ! I appreciate your great efforts that brought you this rank.", 
                    "Excellent ! Que Dieu te bénisse|Je suis tellement fier d'être ton professeur|Bravo ! Tu as fourni un grand effort pour arriver à ceci|Fabuleux ! C'est exactement comme cela qu'il faut faire !"]
                },
				{
                    start: 20, end: 20, type: "value",
                    observation: ["",
                    "*****", 
                    "*****", 
                    "*****"]
                }
			]
		}
	};
}

function viewObservations(observationsObject, selLang){
	var l = observationsObject.VuObservationsVu.Observations.length;
	for ( var i = 0, j = (observationsObject.VuObservationsVu.obsLangs).indexOf(selLang) / 2; i < l; i++ ) {
		$("#obs" + i).val(observationsObject.VuObservationsVu.Observations[i].observation[j]);
	}
}

function fillObservationsTbl(observationsObject, selLang){
	var l = observationsObject.VuObservationsVu.Observations.length;
	var str = "";
	for ( var i = 0, j = (observationsObject.VuObservationsVu.obsLangs).indexOf(selLang) / 2; i < l; i++ ) {
        var tmp = observationsObject.VuObservationsVu.Observations[i];
        str = "<div class=\"w3-text-dark-grey w3-padding-top w3-margin-top\">";
        if ( tmp.type == "value" ) {
            str += tmp.start  + " : </div>";
		str += "<textarea class = 'w3-input w3-border' rows='3' id='obs" + i + "' style='resize:none'></textarea>";
        }
        else {
            str += "de " + tmp.start + " à " + tmp.end + " [ " + tmp.start + "; " + tmp.end + " [ : </div>";
			str += "<textarea class='w3-input w3-border' rows='3' id='obs" + i + "' style='resize:none'></textarea>";
        }
		$("#intervals").append(str);
		$("#obs" + i).val(observationsObject.VuObservationsVu.Observations[i].observation[j]);
	}
}

function storeObservations(observationsObject, selLang){
	var l = observationsObject.VuObservationsVu.Observations.length;
	for ( var i = 0, j = (observationsObject.VuObservationsVu.obsLangs).indexOf(selLang) / 2; i < l; i++ ) {
		observationsObject.VuObservationsVu.Observations[i].observation[j] = $("#obs" + i).val();
	}
	observationsObject.VuObservationsVu.obsLanguage = selLang;
	chrome.storage.local.remove('VuObservationsVu');
	chrome.storage.local.set(observationsObject);
}
