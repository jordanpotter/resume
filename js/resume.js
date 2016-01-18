(function () {
	'use strict';

	var template;
	var data;

	function loadPartial(path, name) {
		return $.get(path)
			.then(function(response) {
				var partial = Handlebars.compile(response);
				Handlebars.registerPartial(name, partial);
			});
	}

	function loadPartials() {
		return $.when(
			loadPartial('templates/header.handlebars', 'header'),
			loadPartial('templates/skills.handlebars', 'skills')
		);
	}

	function loadTemplate() {
		return $.get('templates/resume.handlebars')
			.then(function(response) {
				template = Handlebars.compile(response);
			});
	}

	function loadData() {
		return $.get('data/resume.json')
			.then(function(response) {
				data = response;
			});
	}

	function renderTemplate() {
		var html = template(data);
		$('#resume').html(html);
	}

	function errorHandler(err) {
		var message = err.responseText || err;
		alert(message);
	}

	$.when(loadPartials(), loadTemplate(), loadData())
		.then(renderTemplate)
		.fail(errorHandler);
}());
