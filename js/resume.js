(function () {
	'use strict';

	function getTemplate() {
		return $.get('templates/resume.handlebars')
			.then(function(template) {
				return Handlebars.compile(template);
			});
	}

	function getData() {
		return $.get('data/resume.json')
			.then(function(data) {
				return data;
			});
	}

	function processTemplate(template, data) {
		var html = template(data);
		$('#resume').html(html);
	}

	function errorHandler(err) {
		var message = err.responseText || err;
		alert(message);
	}

	$.when(getTemplate(), getData())
		.then(processTemplate)
		.fail(errorHandler);
}());
