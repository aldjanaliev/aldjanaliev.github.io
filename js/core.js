$(document).ready(function(){

//  -----fancybox---------
  $(".fancybox").fancybox();

// ------выбор языка-------
   $('.ru').removeClass('active');
   $('.ru').css('display','none');

	$('.lang > span').click(function(){  

  if ($(this).hasClass('rus')) {
   $(this).addClass('active');
   $('.eng').removeClass('active');
  } 

  else if($(this).hasClass('eng')){
   $(this).addClass('active');
    $('.rus').removeClass('active');
  };
 });

// -----подключение якоря------
  $("#menu").on('click','a', function(event){
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  })

 $(".head-txt").on('click','a', function(event){
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  })

 // ------прокрутка чисел---------
    var show = true;
    var countbox = ".number";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.number').css('opacity', '1');
            $('.number').spincrement({
                duration: 3000
            });
             
            show = false;
        }
    });

 // ------кнопка вверх-------
    var button = $('.footer_scroll');
    $(window).scroll (function () {
        if ($(this).scrollTop () > 400) {
            button.fadeIn(200);
        }
        else {
            button.fadeOut(200);
        }
        if ($('footer').offset().top - $(window).height() +100 < $(window).scrollTop()) {
            $('.footer_scroll').addClass('scroll_static');
        } else {
            $('.footer_scroll').removeClass('scroll_static');
        }
    });

    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



});