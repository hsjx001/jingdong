$(function() {
	let $ul = $('.slider-main-pic'),
		$slider = $('.slider-main'),
		$ol = $('.circle'),
		len = $ul.children().length,
		index = 0,
		$img = $('.slider-main').find('img'),
		sliderWidth = $slider.width() + 10;
		sliderHeight = $slider.width() - 205;
	    $ul.find('img').width(sliderWidth);
	    $slider.height(sliderHeight);

	for (let i = 0; i < len; i++) {
		$('<li data-index = ${i}></li>').appendTo($ol)
		// $(`<li></li>`).appendTo($ol)
	}

	$ul.children().eq(0).clone().appendTo($ul)
	$ol.children().eq(0).addClass('selected')


	timer = setInterval(move, 2800);

	$slider.swipeLeft(function() {
		clearInterval(timer)
		move()
	timer = setInterval(move, 2800);
	})
	
	$slider.swipeRight(function() {
		clearInterval(timer)
		index--
		if (index < 0) {
			$ul.css({
				left: -len * sliderWidth
			})
			index = 4
			circleBg()
			$ul.animate({
				left: -index * sliderWidth
			});
		} else {
			circleBg()
			$ul.animate({
				left: -index * sliderWidth
			});
		}
		timer = setInterval(move, 2800);
	})
  
	function move() {
		index++
		if (index > len) {
			$ul.css({
				left: 0
			})
			index = 1
			circleBg()
			$ul.animate({
				left: -index * sliderWidth
			})
		} else {
			circleBg()
			$ul.animate({
				left: -index * sliderWidth
			});
		}
		
	}
	// setInterval(move, 2800);
    // timer2 = setInterval(move, 2800);
	function circleBg() {
		if (index == len) {
			$ol.children().eq(0).addClass('selected').siblings().removeClass('selected')
		}
		$ol.children().eq(index).addClass('selected').siblings().removeClass('selected')
	}	
	
	
})

 