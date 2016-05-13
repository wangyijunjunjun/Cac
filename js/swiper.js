/**
 * Created by nex on 5/1/16.
 */

var animationText;
var framerateCount = 0;
var codecCount = 0;
var codecIndexx = 0;
var img = document.getElementById("videoimg");
//var img = $("#videoimg");
var paddingleft, paddingtop;

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
        var _ = $(".swiper-container .swiper-slide-active");
        animationText = _.children('div.title').html().toString();

        globalConfig.video = animationText;

        animation();
        getBitrate();
        //cacTime(storage_input.value,unit_div.innerHTML);
        //容量不变,改变时间

        // alert('事件触发了;');
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html());
            //animationText = $(this).children('div.title').html().toString();
            //alert(animationText);
            //animation(animationText);
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
        framerateCount++;



        //alert(framerateCount);

        if (framerateCount > 1) {

            var _ = $(".swiper-container5 .swiper-slide-active");
            animationText = _.children('div.title').html().toString();

            globalConfig.framerate = animationText;

            //animation();
            getBitrate();
            //cacTime(storage_input.value,unit_div.innerHTML);
            for (var i = 0; i < framerates.length; i++) {
                var fuckname = framerates[i];
                if (fuckname == animationText) {
                    //redrawPiechart(i);
                    //renderDotTable(i);
                    //reRenderDotTable(i);
                    //alert(i);
                    renderDotTable(i);
                }
            }

        }
        // alert(animationText);
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html());
            //animationText = $(this).children('div.title').html().toString();
            //alert(animationText);
            //animation(animationText);
        });
    },

    //
    //onSlideChangeStart:function(swiper6){
    //    var _ = $(".swiper-container5 .swiper-slide-active");
    //    animationText = _.children('div.title').html().toString();
    //    alert(animationTextl);
    //}


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

    onSlideChangeEnd: function (swiper5) {

        codecCount ++;
        if(codecCount > 1) {
            var _ = $(".swiper-container4 .swiper-slide-active");
            animationText = _.children('div.title').html().toString();

            globalConfig.codec = animationText;

            //animation();
            getBitrate();

            for (codecIndexx = 0; codecIndexx < codecs.length; codecIndexx++) {
                var fuckname = codecs[codecIndexx];
                if (fuckname == animationText) {
                    //redrawPiechart(i);
                    //renderDotTable(i);
                    //reRenderDotTable(i);
                    //alert(i);
                    //alert(codecIndexx);
                    getBitrate();
                    //cacTime(storage_input.value,unit_div.innerHTML);
                    var option = compressionRatios[codecIndexx];
                    var ratio  = Number(option)/(Number(option)+1)*100;

                    piechartRatio.innerHTML = ratio.toString().substring(0,4)+":1";
                    redrawPiechart(ratio);
                }
            }
            _.click(function () {
                //alert($(this).children('div.title').html());

                alert(animationText);
                //animation(animationText);
            });
        }
    }
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

        var _ = $(".swiper-container1 .swiper-slide-active");
        animationText = _.children('div.title').html().toString();

        globalConfig.ch = animationText;
        getBitrate();
        //cacTime(storage_input.value,unit_div.innerHTML);
        animation();
        //globalConfig.ch = $(this).children('div.title').html().toString();
        //要怎样设置这个回调呢,没有原生的提供,那么要想别的法子了
        $(".swiper-slide-active").click(function () {

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
        //globalConfig.khz = $(this).children('div.title').html().toString();
        var _ = $(".swiper-container2 .swiper-slide-active");
        animationText = _.children('div.title').html().toString();

        globalConfig.khz = animationText;
        getBitrate();
        //cacTime(storage_input.value,unit_div.innerHTML);
        animation();
        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html());

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
        var _ = $(".swiper-container3 .swiper-slide-active");
        animationText = _.children('div.title').html().toString();

        globalConfig.bit = animationText;
        getBitrate();
        //cacTime(storage_input.value,unit_div.innerHTML);
        //animation();
        //globalConfig.bit = $(this).children('div.title').html().toString();

        $(".swiper-slide-active").click(function () {
            //alert($(this).children('div.title').html().toString());
            alert(globalConfig.bit)
        });
    }
});


//下方swiper的值改变,上方的图形改变
//动画函数 六个swiper 数十个text
function animation() {

    for (var i = 0; i < videos.length; i++) {
        var everyname = videos[i];
        if (everyname == animationText) {

            img.style.width = (54 + i * 2).toString() + "%";
            //img.style.width = (78+index*2).toString()+"%";

            paddingleft = (100 - Number(img.style.width.substr(0, 2)));

            img.style.paddingLeft = (paddingleft / 2).toString() + "%";

            paddingtop = (259 - (256.2 * Number(img.style.width.substr(0, 2)) / 100)).toString();

            //alert(paddingtop);
            img.style.paddingTop = (paddingtop / 2).toString() + "px";
        }
    }

    //for (var j = 0; j < framerates.length; j++) {
    //
    //    var fuckname = framerates[j];
    //    if (fuckname == animationText) {
    //
    //        renderDotTable(j);
    //
    //    }
    //}


    //switch (animationText) {
    //    case "SucksMan":
    //        //alert(animationText);
    //        break;
    //    case "720P":
    //        //js计算来实现居中
    //
    //        img.style.width = "76%";
    //        paddingleft = (100 - Number(img.style.width.substr(0, 2)));
    //
    //        img.style.paddingLeft = (paddingleft / 2).toString() + "%";
    //
    //        paddingtop = (259 - (256.2 * Number(img.style.width.substr(0, 2)) / 100)).toString();
    //
    //        //alert(paddingtop);
    //        img.style.paddingTop = (paddingtop / 2).toString() + "px";
    //        break;
    //
    //    case "1080P":
    //        //js计算来实现居中
    //        //alert("fuck");
    //        //alert(getIndex("1080P"));
    //
    //        mediate("1080P");
    //        // img.style.width = "78%";
    //        //paddingleft = (100 - Number(img.style.width.substr(0, 2)));
    //        //
    //        // img.style.paddingLeft = (paddingleft / 2).toString() + "%";
    //        //
    //        // paddingtop = (259 - (256.2 * Number(img.style.width.substr(0, 2)) / 100)).toString();
    //        //
    //        // img.style.paddingTop = (paddingtop / 2).toString() + "px";
    //        break;
    //    case "12ch":
    //        //alert(animationText);
    //        redrawPiechart(30);
    //        break;
    //    case "16ch":
    //        //alert(animationText);
    //        redrawPiechart(50);
    //        break;
    //    case "uuuu":
    //        renderDotTable("B");
    //        break;
    //}
}

//function mediate(name) {
//    var index = getIndex(name);
//
//    img.style.width = (78+index*2).toString()+"%";
//    var paddingleft = (100 - Number(img.style.width.substr(0, 2)));
//
//    img.style.paddingLeft = (paddingleft / 2).toString() + "%";
//
//    var paddingtop = (259 - (256.2 * Number(img.style.width.substr(0, 2)) / 100)).toString();
//
//    img.style.paddingTop = (paddingtop / 2).toString() + "px";
//}
//

function changeSwipers() {
    //先拿到globalConfig对象的属性及index
    //indexch = getIndex(chs, globalConfig.ch);
    //indexkhz = getIndex(khzs, globalConfig.khz);
    //indexbit = getIndex(bits, globalConfig.bit);

    swiper.slideTo(1, 1000, false);
    swiper2.slideTo(1, 1000, false);
    swiper3.slideTo(0, 1000, false);
    swiper4.slideTo(0, 1000, false);
    swiper5.slideTo(0, 1000, false);
    swiper6.slideTo(0, 1000, false);
}

//通过遍李数组,获取指定元素的索引值
//function getIndex(array, str) {
//    var index = 0;
//    for (var i = 0; i < array.length; i++) {
//        if (array[i] == str) {
//            index = i;
//            return;
//        }
//    }
//    return index;
//}