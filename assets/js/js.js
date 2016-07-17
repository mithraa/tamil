function showPanel(langToShow) {
	var languageArr = ["english", "tamil"];
	for(var i=0;i<languageArr.length;i++){
		var lanEl = document.getElementById(languageArr[i] + "-poem");
		var titleEl = document.getElementById(languageArr[i] + "-title");
		var lanButtonEl = document.getElementById(languageArr[i] + "-lang-button");
		if(lanEl != null){
			document.getElementById('lang-nav').style.display="block";
			if(languageArr[i] == langToShow) {
				lanEl.style.display = "block";
				titleEl.style.display = "block";
				lanButtonEl.style.backgroundColor= "#4361b4";
				lanButtonEl.style.color="#fff";
				document.cookie = setCookie("langChoice", langToShow, 100);
			}else{
				lanEl.style.display = "none";
				titleEl.style.display = "none";
				lanButtonEl.style.backgroundColor= "#fdfdfd";
				lanButtonEl.style.color= "#444";
			}
		}
	}
}
	function checkCookie() {
		this.langChoice = getCookie("langChoice");
		this.langChoice = (this.langChoice == "") ? "tamil" : langChoice ;
		showPanel(langChoice);
	}

	function setCookie(cname,cvalue,exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires=" + d.toGMTString();
	    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}