	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', '../json/news.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items   = JSON.parse(request.responseText);
			var output  = '';
			for (var key in items) {
				output += '<div class="row"><div class="col-md-5"><img class="img-responsive" src="' + items[key].image + '"></a></div>';
				output += '<div class="col-md-7"><h3>' + items[key].title       + '</h3>';
				output += '<div>'                      + items[key].description + '</div>';
				output += '<div>Date: '                + items[key].date        + '</div>';
				output += '<div>Location: '            + items[key].location    + '</div>';
				output += '<a href="'                  + items[key].link        + '">Read more</a></div></div>';

			}
			output     += '';
			document.getElementById('container').innerHTML = output;
		}
	}
	request.send();
