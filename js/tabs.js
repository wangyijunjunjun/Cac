/**
 * Created by nex on 5/1/16.
 */
$(document).ready(function () {
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

            $("#swiperItem01").children().html("<div class='title'>ddd</div>");
            $("#swiperItem02").children().html("<div class='title'>aaa</div>");
            $("#swiperItem03").children().html("<div class='title'>wee</div>");
            $("#swiperItem04").children().html("<div class='title'>gdf</div>");
            $("#swiperItem05").children().html("<div class='title'>ghg</div>");

        }


        function turn01() {

            $("#swiperItem01").children().html("<div class='title'>HHHHHH</div>");
            $("#swiperItem02").children().html("<div class='title'>JJJJJJ</div>");
            $("#swiperItem03").children().html("<div class='title'>UUUUUU</div>");
            $("#swiperItem04").children().html("<div class='title'>AAAAAA</div>");
            $("#swiperItem05").children().html("<div class='title'>RRRRRR</div>");

        }

        function turn02() {

            $("#swiperItem01").children().html("<div class='title'>QQ</div>");
            $("#swiperItem02").children().html("<div class='title'>QQ</div>");
            $("#swiperItem03").children().html("<div class='title'>TT</div>");
            $("#swiperItem04").children().html("<div class='title'>WW</div>");
            $("#swiperItem05").children().html("<div class='title'>RGG</div>");

        }


    });
});