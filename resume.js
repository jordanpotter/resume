(function () {
	'use strict';

	function getTemplate() {
		return $.get('resume.handlebars')
			.then(function(template) {
				return Handlebars.compile(template);
			});
	}

	function getData() {
		return $.get('resume.json')
			.then(function(data) {
				return data;
			});
	}

	function processTemplate(template, data) {
		var html = template(data);
		$('#resume').html(html);
	}

	function errorHandler(err) {
		alert(err);
	}

	$.when(getTemplate(), getData())
		.then(processTemplate)
		.fail(errorHandler);
}());
