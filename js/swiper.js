/**
 * Created by nex on 5/1/16.
 */

var animationText;

var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 20,
    observer: true,
    direction: 'horizontal',

    onSlideChangeEnd: function (swiper) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html());
            animationText = $(this).children('div.title').html().toString();
            alert(animationText);
            animation(animationText);
        });
    }
});

var swiper6 = new Swiper('.swiper-container5', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 20,
    observer: true,
    direction: 'horizontal',

    onSlideChangeEnd: function (swiper6) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html());
            animationText = $(this).children('div.title').html().toString();
            alert(animationText);
            animation(animationText);
        });
    }
});

var swiper5 = new Swiper('.swiper-container4', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 20,
    observer: true,
    direction: 'horizontal',

    //onSlideChangeEnd: function (swiper5) {
    //    // alert('事件触发了;');
    //    //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
    //    $(".swiper-slide-active").click(function () {
    //        //alert($(this).children('div.title').html());
    //        animationText = $(this).children('div.title').html().toString();
    //        alert(animationText);
    //        animation(animationText);
    //    });
    //}
});



//初始化的时候,没有执行回调onSlideChangeEnd,所有在给globalConfig初始化的时候,就要覆上应有的初始值
var swiper2 = new Swiper('.swiper-container1', {
    slidesPerView: 4,
    direction: 'vertical',
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    observer: true,
    autoHeight: true,


    onSlideChangeEnd: function (swiper2) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            globalConfig.ch = $(this).children('div.title').html().toString();
        });
    }
});

var swiper3 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    direction: 'vertical',
    centeredSlides: true,
    spaceBetween: 30,
    observer: true,
    initialSlide: 1,
    autoHeight: true,


    onSlideChangeEnd: function (swiper3) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html());
            globalConfig.khz = $(this).children('div.title').html().toString();
        });
    }
});

var swiper4 = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    direction: 'vertical',
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    observer: true,
    autoHeight: true,


    onSlideChangeEnd: function (swiper4) {
        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html().toString());
            globalConfig.bit = $(this).children('div.title').html().toString();
            alert(globalConfig.bit)
        });
    }
});


//动画函数 四个swiper 数十个text
function animation(text) {
    switch (text) {
        case "SucksMan":
            alert(animationText);
            break;
        case "22.9":
            alert(animationText);
            break;
    }
}


function changeSwipers() {
    //先拿到globalConfig对象的属性及index
    indexch = getIndex(chs, globalConfig.ch);
    indexkhz = getIndex(khzs, globalConfig.khz);
    indexbit = getIndex(bits, globalConfig.bit);


    swiper2.slideTo(1, 1000, false);
    swiper3.slideTo(0, 1000, false);
    swiper4.slideTo(0, 1000, false);
}

//通过遍李数组,获取指定元素的索引值
function getIndex(array, str) {
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == str) {
            index = i;
            return;
        }
    }

    return index;
}