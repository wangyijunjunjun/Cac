/**
 * Created by nex on 4/30/16.
 */
var myApp = new Framework7({
    animateNavBackIcon:true
});

var indexch,indexkhz,indexbit;
var chs = [];
var khzs = [];
var bits = [];

function configration(video,framerate,codec,ch,khz,bit){
    this.video = video;
    this.framerate = framerate;
    this.codec = codec;
    this.ch = ch;
    this.khz = khz;
    this.bit = bit;
}

//定义一个全局的configration对象
var globalConfig = new configration('PA','23.98','AppleProRes4444','8ch','44.1khz','16bit');

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

var mainView = myApp.addView('.view-main' , {
    dynamicNavbar:true,
    domCache:true,
    tapHold:true
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

function turn2Help(){
    mainView.router.load({pageName:'help'});
}