import * as $ from 'jquery';

$(document).ready(function () {
	$('.close_modal').click(function () {
		$('.modalblock').fadeOut(300);
	});

	$('.add_button').click(function () {
		$('.nameblock').append('<div class="name"><input class="new_input" type="text" placeholder="Имя поставщика"></div>');
	});

	$('.open_table').click(function () {
		$('.add_table').fadeIn();
	});

	$('.open_name').click(function () {
		$('.add_name').fadeIn();
	});
});