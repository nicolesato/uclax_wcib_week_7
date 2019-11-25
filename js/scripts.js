// random bg color (vanilla js)

var bgColor = document.querySelector('.bg_color_button');
var bodyBg = document.querySelector('.body_bg');

function random(number) {
	return Math.floor(Math.random()*number);
}

function bgChange() {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	bodyBg.style.backgroundColor = rndCol;
	console.log(bodyBg);
}

bgColor.addEventListener('click', bgChange);

// animal flip book (jQuery)

jQuery(function() {

	let left_switch = 1;
	let middle_switch = 1;
	let right_switch = 1;

	$('#left_button').click(function () {

		if (left_switch == 1) {
			left_switch = 2;
			$('#left_animal').attr('src', 'images/left2.png');
		}
		else if (left_switch == 2) {
			left_switch = 3;
			$('#left_animal').attr('src', 'images/left3.png');
		}
		else if (left_switch == 3) {
			left_switch = 4;
			$('#left_animal').attr('src', 'images/left4.png');
		}
		else if (left_switch == 4) {
			left_switch = 5;
			$('#left_animal').attr('src', 'images/left5.png');
		}
		else if (left_switch == 5) {
			left_switch = 6;
			$('#left_animal').attr('src', 'images/left6.png');
		}
		else if (left_switch == 6) {
			left_switch = 7;
			$('#left_animal').attr('src', 'images/left7.png');
		}
		else if (left_switch == 7) {
			left_switch = 8;
			$('#left_animal').attr('src', 'images/left8.png');
		}
		else if (left_switch == 8) {
			left_switch = 9;
			$('#left_animal').attr('src', 'images/left9.png');
		}
		else if (left_switch == 9) {
			left_switch = 10;
			$('#left_animal').attr('src', 'images/left10.png');
		}
		else if (left_switch == 10) {
			left_switch = 11;
			$('#left_animal').attr('src', 'images/left11.png');
		}
		else {
			left_switch = 1;
			$('#left_animal').attr('src', 'images/left1.png');
		}

	});

	$('#middle_button').click(function () {

		if (middle_switch == 1) {
			middle_switch = 2;
			$('#middle_animal').attr('src', 'images/middle2.png');
		}
		else if (middle_switch == 2) {
			middle_switch = 3;
			$('#middle_animal').attr('src', 'images/middle3.png');
		}
		else if (middle_switch == 3) {
			middle_switch = 4;
			$('#middle_animal').attr('src', 'images/middle4.png');
		}
		else if (middle_switch == 4) {
			middle_switch = 5;
			$('#middle_animal').attr('src', 'images/middle5.png');
		}
		else if (middle_switch == 5) {
			middle_switch = 6;
			$('#middle_animal').attr('src', 'images/middle6.png');
		}
		else if (middle_switch == 6) {
			middle_switch = 7;
			$('#middle_animal').attr('src', 'images/middle7.png');
		}
		else if (middle_switch == 7) {
			middle_switch = 8;
			$('#middle_animal').attr('src', 'images/middle8.png');
		}
		else if (middle_switch == 8) {
			middle_switch = 9;
			$('#middle_animal').attr('src', 'images/middle9.png');
		}
		else if (middle_switch == 9) {
			middle_switch = 10;
			$('#middle_animal').attr('src', 'images/middle10.png');
		}
		else if (middle_switch == 10) {
			middle_switch = 11;
			$('#middle_animal').attr('src', 'images/middle11.png');
		}
		else {
			middle_switch = 1;
			$('#middle_animal').attr('src', 'images/middle1.png');
		}

	});

	$('#right_button').click(function () {

		if (right_switch == 1) {
			right_switch = 2;
			$('#right_animal').attr('src', 'images/right2.png');
		}
		else if (right_switch == 2) {
			right_switch = 3;
			$('#right_animal').attr('src', 'images/right3.png');
		}
		else if (right_switch == 3) {
			right_switch = 4;
			$('#right_animal').attr('src', 'images/right4.png');
		}
		else if (right_switch == 4) {
			right_switch = 5;
			$('#right_animal').attr('src', 'images/right5.png');
		}
		else if (right_switch == 5) {
			right_switch = 6;
			$('#right_animal').attr('src', 'images/right6.png');
		}
		else if (right_switch == 6) {
			right_switch = 7;
			$('#right_animal').attr('src', 'images/right7.png');
		}
		else if (right_switch == 7) {
			right_switch = 8;
			$('#right_animal').attr('src', 'images/right8.png');
		}
		else if (right_switch == 8) {
			right_switch = 9;
			$('#right_animal').attr('src', 'images/right9.png');
		}
		else if (right_switch == 9) {
			right_switch = 10;
			$('#right_animal').attr('src', 'images/right10.png');
		}
		else if (right_switch == 10) {
			right_switch = 11;
			$('#right_animal').attr('src', 'images/right11.png');
		}
		else {
			right_switch = 1;
			$('#right_animal').attr('src', 'images/right1.png');
		}

	});

});
