var bodyText;
var linkButtons = [];

/*document.addEventListener("DOMContentLoaded", function() {
	bodyText = document.getElementById('body-text');

	linkButtons.push(document.getElementById('home-link'));
	linkButtons.push(document.getElementById('services-link'));
	linkButtons.push(document.getElementById('work-link'));
	linkButtons.push(document.getElementById('contact-link'));

	getPage('home');
});*/

function getPage(page) {
	var bodyText = document.getElementById('body-text');

	var request = new XMLHttpRequest();
	request.open('GET', page+".html", true);

	request.onload = function() {
	  if (this.status >= 200 && this.status < 400) {
	    // Success!
	    bodyText.innerHTML = this.response;
	  } else {
	    // We reached our target server, but it returned an error
	    if(this.response.length > 0) {
	    	bodyText.innerHTML = this.response;
	    }
	  }
	};

	request.onerror = function(e) {
	  // There was a connection error of some sort
	  console.error("ERROR");
	};

	request.send();

	// Remove is-active from all buttons
	linkButtons.forEach(function(item, i) {
		item.classList.remove("is-active");
	});

	var liElement = document.getElementById(page+'-link');
	liElement.classList.add("is-active");

	return false;
};