/**
 * Created by nex on 4/30/16.
 */
var myApp = new Framework7({
    animateNavBackIcon: true,
    template7Pages: true,
    precompileTemplates: true
});

var indexch, indexkhz, indexbit;
var chs = [];
var khzs = [];
var bits = [];

function configration(video, framerate, codec, ch, khz, bit) {
    this.video = video;
    this.framerate = framerate;
    this.codec = codec;
    this.ch = ch;
    this.khz = khz;
    this.bit = bit;
}

//定义一个全局的configration对象
var globalConfig = new configration('PA', '23.98', 'AppleProRes4444', '8ch', '44.1khz', '16bit');

//现在要思考一下怎么改变初始化的时候的swiper状态
//只需添加参数initialSlide:1即可
//想到一个问题:可不可以动态添加swiper的slide,这样可扩展性就打打提高

//伪代码:
//function onloaded(){
//    func:添加swiper的数据
//    func:渲染swiper
//}

//干脆放在后面来

var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true,
    tapHold: true
});
$$('.open-right-panel').on('click', function (e) {
    // 'right' position to open Right panel
    myApp.openPanel('right');
});

//
//mainView.router.load({pageName:'help'});
//

//var pickerDevice = myApp.picker({
//    input: '#picker-device',
//    cols: [
//        {
//            textAlign: 'center',
//            values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
//        }
//    ]
//});
//
//pickerDevice.open();
//

//长按修改时间或者空间
//$$('.bottom-item').on('click' , function(){
//    alert("长按!");
//})

function turn2Help() {
    mainView.router.load({pageName: 'help'});
}

//<li class="swipeout" style="background-color: #88D7F4">
//    <div class="swipeout-content item-content" style="background-color: #88D7F4">
//    <!--<div class="item-media">点点滴滴</div>-->
//    <!--<div class="item-inner">士大夫士大夫</div>-->
//    <div class="card" style="margin: 0 auto;background-color: #88D7F4">
//    <div style="width: 50px;height: 180px;border-radius:8px 0 0 8px ;background-color: #425665;float: left"></div>
//    <div style="width: 290px;height: 180px;border-radius: 0 8px 8px 0;background-color: #ffffff;float: left"></div>
//    </div>
//
//    </div>
//    <div class="swipeout-actions-right">
//    <a href="#" class="swipeout-delete" style="background-color: #FFE036">Action 1</a>
//</div>
//</li>
//动态生成收藏卡片
function addFav() {
    //alert("kkk");
    //$('#cards_ul').appendChild("<li class='swipeout' style='background-color: #88D7F4'>"
    //    + "<div class='swipeout-content item-content' style='background-color: #88D7F4'>"
    //    + "<div class='card' style='margin:0 auto;background-color: #88D7F4'>"
    //    + "<div style='width: 50px;height:180px;border-radius:8px 0 0 8px ;background-color:#425665;float:left'></div>"
    //    + "<div style='width: 290px;height:180px;border-radius: 0 8px 8px 0;background-color:#ffffff;float:left'></div>"
    //    + "</div>"
    //    + "</div>"
    //    + "<div class='swipeout-actions-right'>"
    //    + "<a href=''#' class='swipeout-delete' style='background-color: #FFE036'>Action 1</a>"
    //    + "</div></li>"
    //);

    var el = document.createElement("li");
    el.class = "swipeout";
    el.style = "background-color: #88D7F4;padding-bottom: 16px";

    //el.innerHTML = "<div class='swipeout-content item-content' style='background-color: #88D7F4'>"
    //    + "<div class='card' style='margin:0 auto;background-color: #88D7F4'>"
    //    + "<div style='width: 50px;height:180px;border-radius:8px 0 0 8px ;background-color:#425665;float:left'></div>"
    //    + "<div style='width: 290px;height:180px;border-radius: 0 8px 8px 0;background-color:#ffffff;float:left'></div>"
    //    + "</div>"
    //    + "</div>"
    //    + "<div class='swipeout-actions-right'>"
    //    + "<a href=''#' class='swipeout-delete' style='background-color: #FFE036'>Action 1</a>"
    //    + "</div>";

    el.innerHTML = "<div class='swipeout-content item-content' style='background-color: #88D7F4;margin-left: -12px;'>"
        + "<div class='card' style='margin: 0 auto;background-color: #88D7F4'>"
        + "<div style='width: 50px;height: 180px;border-radius:8px 0 0 8px ;background-color: #425665;float: left'></div>"
        + "<div style='width: 290px;height: 180px;border-radius: 0 8px 8px 0;background-color: #ffffff;float: left'>"
        + "<h3 style='margin: 12px 0 -10px 16px;font-size: 22px'>CUSTOM 1</h3>"
        + "<div class='sixConfig' style='margin: 24px 0 0 16px;'>"
        + "<div class='distract01'>"
        + "<img src='img/card01.png' alt='' style='width: 40px;height: 32px;'>"
        + "<h4 style='margin: -30px 0 0px 51px;font-style: normal'>hhhhh</h4></div>"
        + "<div class='distract02'>"
        + "<img src='img/card04.png' alt='' style='width: 40px;margin-top: 5px;height: 32px;'>"
        + "<h4 style='margin: -30px 0 0 51px;font-style: normal'>hhhhh</h4></div>"
        + "<div class='distract01'>"
        + "<img src='img/card02.png' alt='' style='width: 40px;height: 32px;'>"
        + "<h4 style='margin: -30px 0 0 51px;font-style: normal'>hhhhh</h4></div>"
        + "<div class='distract02'>"
        + "<h4 style='margin: 46px 0 0 51px;font-style: normal'>hhhhh</h4></div>"
        + "<div class='distract01'>"
        + "<img src='img/card03.png' alt='' style='width: 40px;height: 32px;'>"
        + "<h4 style='margin: -30px 0 0 51px;font-style: normal'>hhhhh</h4></div>"
        + "<div class='distract02'>"
        + "<h4 style='margin: -27px 0 0 51px;font-style: normal'>hhhhh</h4></div>"
        + "</div></div></div></div>"
        + "<div class='swipeout-actions-right'>"
        + "<a href='#' class='swipeout-delete' style='background-color: #FFE036'>Action 1</a>"
        + "</div>";


    var body = document.getElementById("cards_ul");

    body.appendChild(el);


//<li class="swipeout" style="background-color: #88D7F4">
//        <div class="swipeout-content item-content" style="background-color: #88D7F4">
//        <div class="card" style="margin: 0 auto;background-color: #88D7F4">
//        <div style="width: 50px;height: 180px;border-radius:8px 0 0 8px ;background-color: #425665;float: left"></div>
//        <div style="width: 290px;height: 180px;border-radius: 0 8px 8px 0;background-color: #ffffff;float: left">
//        <h3 style="margin: 12px 0 -10px 16px;font-size: 22px">CUSTOM 1</h3>
//
//    <div class="sixConfig" style="margin: 31px 0 0 16px;">
//        <div class="distract01">
//        <img src="img/card01.png" alt="" style="width: 40px;height: 32px;">
//        <h4 style="margin: -30px 0 0px 51px;font-style: normal">hhhhh</h4>
//        </div>
//
//        <div class="distract02">
//        <img src="img/card04.png" alt=""
//    style="width: 40px;margin-top: 5px;height: 32px;">
//        <h4 style="margin: -30px 0 0 51px;font-style: normal">hhhhh</h4>
//        </div>
//
//        <div class="distract01">
//        <img src="img/card02.png" alt="" style="width: 40px;height: 32px;">
//        <h4 style="margin: -30px 0 0 51px;font-style: normal">hhhhh</h4>
//        </div>
//
//        <div class="distract02">
//        <h4 style="margin: 46px 0 0 51px;font-style: normal">hhhhh</h4>
//        </div>
//
//        <div class="distract01">
//        <img src="img/card03.png" alt="" style="width: 40px;height: 32px;">
//
//        <h4 style="margin: -30px 0 0 51px;font-style: normal">hhhhh</h4>
//        </div>
//
//        <div class="distract02">
//
//        <h4 style="margin: -27px 0 0 51px;font-style: normal">hhhhh</h4>
//        </div>
//        </div>
//        </div>
//        </div>
//        </div>
//        <div class="swipeout-actions-right">
//        <a href="#" class="swipeout-delete" style="background-color: #FFE036">Action 1</a>
//    </div>
//    </li>


//ok , 尝试了N次之后,终于成功了一次


    //$("#cards_ul").append(el);

    //现在决定使用template7来写
    //var testHTML = Template7.templates.cardTemplate({
    //    test:'success!'
    //});
    //
    //alert(testHTML.toString);
    //$("#cards_ul").html(testHTML);

    //$("#cards_ul").html("<li class='swipeout' style='background-color: #88D7F4'>"
    //    + "<div class='swipeout-content item-content' style='background-color: #88D7F4'>"
    //    + "<div class='card' style='margin:0 auto;background-color: #88D7F4'>"
    //    + "<div style='width: 50px;height:180px;border-radius:8px 0 0 8px ;background-color:#425665;float:left'></div>"
    //    + "<div style='width: 290px;height:180px;border-radius: 0 8px 8px 0;background-color:#ffffff;float:left'></div>"
    //    + "</div>"
    //    + "</div>"
    //    + "<div class='swipeout-actions-right'>"
    //    + "<a href=''#' class='swipeout-delete' style='background-color: #FFE036'>Action 1</a>"
    //    + "</div></li>");


}