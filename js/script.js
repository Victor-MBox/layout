// Кнопка поиска в шапке
const btnSearch = document.querySelector('.btn-search')
const searchBox = document.querySelector('.search-box')

btnSearch.addEventListener('click', function () {
	searchBox.classList.toggle('active')
})


// Кнопка Бургер в шапке
const btnBurger = document.querySelector('.burger')
const mobNav = document.querySelector('.mob-nav')


btnBurger.addEventListener('click', function () {
	btnBurger.classList.toggle('active'),
	mobNav.classList.toggle('active')
})


// Инициализация Animate On Scroll Library
AOS.init();

// Проверяем ширину экрана
function isMobile() {
    return window.innerWidth <= 768;
}

// Отключаем библиотеку если меньше 768
if (isMobile()) {
    AOS.init({
        disable: true 
    });
}



// Slider Owl Carousel 2
$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	dots: false,
	lazyLoad: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		992: {
			items: 3,
		},
	},
})

// Форма в подвале
// * Как она должна работать, для проверки необходимо использовать логику на php. Например, maler - smart.php можно использовать
// $(document).ready(function () {
// 	$('#form-footer').submit(function (event) {
// 		event.preventDefault()

// 		var email = $("input[name='email']").val()

// 		// Отправка AJAX-запроса
// 		$.ajax({
// 			type: 'POST',
// 			url: '../maler/smart.php',
// 			data: { email: email },
// 			success: function (response) {
// 				$('.btn_footer').addClass('success')
// 				$('.btn_footer').val(response)
// 			},
// 			error: function (xhr, status, error) {
// 				console.error(error)
// 			},
// 		})
// 	})
// })

// ! Для упрощения буду использовать имитацию отправки формы. Можно проверить без локального сервера
$(document).ready(function () {
	$('#form-footer').submit(function (event) {
		event.preventDefault()

		var email = $(this).find("input[name='email']").val()

		if (email.trim() === '') {
			alert('Пожалуйста, введите email.')
			return
		}

		// Имитация отправки запроса
		var $submitButton = $(this).find('.btn_footer')
		$submitButton.addClass('success')
		$submitButton.val('Спасибо')
		$(this)[0].reset()
	})

	// Форма в модальном окне
	$('#form-modal').submit(function (event) {
		event.preventDefault()

		var email = $(this).find("input[name='email']").val()
		var phone = $(this).find("input[name='phone']").val()
		var subscribe = $(this).find("input[name='subscribe']").is(':checked')

		if (email.trim() === '') {
			alert('Пожалуйста, введите email.')
			return
		}

		if (!subscribe) {
			alert('Пожалуйста, подтвердите получение информации о новостях и акциях.')
			return
		}

		// Имитация отправки запроса
		var $submitButton = $(this).find('.btn_footer')
		$submitButton.addClass('success')
		$submitButton.val('Спасибо')
		$(this)[0].reset()

		// Закрываем модальное окно через 1 секунду
		setTimeout(function () {
			$.fancybox.close()
		}, 1000)
	})
})




