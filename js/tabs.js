/**
 * Created by nex on 5/1/16.
 */
//$(document).ready(function () {



    $("#tabs li").bind("click", function () {
        var index = $(this).index();
        var divs = $("#tabs-body > div");

        $(this).parent().children("li").attr("class", "tab-nav");//将所有选项置为未选中
        $(this).attr("class", "tab-nav-action"); //设置当前选中项为选中样式
        divs.hide();//隐藏所有选中项内容
        divs.eq(index).show(); //显示选中项对应内容


        switch (index) {
            case 0:
                turn00();
                break;
            case 1:
                turn01();
                break;
            case 2:
                turn02();
                break;
        }

        function turn00() {
            $("#swiperItem01").children().html("<div class='title'>NTSC</div>");
            $("#swiperItem02").children().html("<div class='title'>PA</div>");
            $("#swiperItem03").children().html("<div class='title'>HD720</div>");
            $("#swiperItem04").children().html("<div class='title'>HD1080</div>");
            $("#swiperItem05").children().html("<div class='title'>2K1080</div>");
            $("#swiperItem06").children().html("<div class='title'>2K1556</div>");
        }


        function turn01() {

            $("#swiperItem01").children().html("<div class='title'>22.9</div>");
            $("#swiperItem02").children().html("<div class='title'>23.98</div>");
            $("#swiperItem03").children().html("<div class='title'>24</div>");
            $("#swiperItem04").children().html("<div class='title'>25</div>");
            $("#swiperItem05").children().html("<div class='title'>26.1</div>");

        }

        function turn02() {

            $("#swiperItem01").children().html("<div class='title'>(HQ)</div>");
            $("#swiperItem02").children().html("<div class='title'>AppleProRes4444</div>");
            $("#swiperItem03").children().html("<div class='title'>AVC</div>");
            $("#swiperItem04").children().html("<div class='title'>WW</div>");
            $("#swiperItem05").children().html("<div class='title'>RGG</div>");

        }


    });
//});