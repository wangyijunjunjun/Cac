/**
 * Created by nex on 5/5/16.
 */
    //处理左视图ul的点击事件.用到的接口是mySwiper.slideTO();
$("#brands_ul li").bind("click", function () {
    var index = $(this).index();

    $(this).parent().children("li").attr("class", "unselected");//将所有选项置为未选中
    $(this).attr("class", "selected"); //设置当前选中项为选中样式

    //关闭left panel
    //myApp.closePanel();

    //switch (index){
    //    case 0:
    //        //调用4次slideTo(写一个方法,changeSliders(),根据globalConfig来更改这4个slider)
    //        changeSwipers();
    //        break;
    //
    //}

    //跳转到型号ul
    switch (index){
        case 0:
            turn2Sony();
            break;
    }


});

function turn2Sony(){
    //mainView.router.load({pageName:'sony'});
$("#brands_div").hide();
    $("#sony_part").show();
}