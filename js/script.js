//Slider (карусель)
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="slick-prev material-icons white"></button>',
        nextArrow: '<button type="button" class="slick-next material-icons white"></button>',
        mobileFirst: true,
        fade: true,
        cssEase: 'linear'
    });
});

  //UpButton+ScrollTop
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#upbutton').fadeIn('slow');
        } else {
            $('#upbutton').fadeOut('slow');
        }
    });
    $('#upbutton').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
    $("body").on('click', '[href*="#"]', function(){
        $.scrollTo($(this.hash), 700);
    });
    $(document).ready(function (){
        $('.greeting_arrow').click(function (){
            $('html, body').animate({
                scrollTop: $("#catalog").offset().top
            }, 1000);
        });
    });
});

//Modal window (popup)
$('[data-modal=feedback]').on('click', function() {
    $('.overlay, #feedback').fadeIn('slow');
    });
    $('.modal_close').on('click', function(){
        $('.overlay, #feedback').fadeOut('slow');
});

//Popup-images
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});
});

//Burger menu
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active'),
    document.querySelector('.menu').classList.toggle('active');
});  

//Validation

$('#feedback form').validate({
    rules: {
        name: "required",
        phone: "required",
        textarea: "required",
        email: {
            required: true,
            email: true
        }
    },
        messages: {
            name: "Пожалуйста введите своё имя",
            activity: "Пожалуйста выберите профессию",
            textarea: "Пожалуйста введите ваше сообщение",
            email: {
              required: "Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
              email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
            }
          }
    });

// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }