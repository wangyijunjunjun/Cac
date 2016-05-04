/**
 * Created by nex on 5/1/16.
 */
var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 20,
    observer:true,
    direction:'horizontal',

    onSlideChangeEnd: function(swiper) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            alert($(this).html());
        });
    }
});

var swiper2 = new Swiper('.swiper-container1', {
    slidesPerView: 4,
    direction : 'vertical',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    observer:true,
    autoHeight: true,


    onSlideChangeEnd: function(swiper2) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            alert($(this).html());
        });
    }
});

var swiper3 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    direction : 'vertical',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    observer:true,
    autoHeight: true,


    onSlideChangeEnd: function(swiper3) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            alert($(this).html());
        });
    }
});

var swiper4 = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    direction : 'vertical',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    observer:true,
    autoHeight: true,


    onSlideChangeEnd: function(swiper4) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            alert($(this).html());
        });
    }
});
