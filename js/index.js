$(function (){
    $(".my-list-content>a").click(function (ev){
        ev.preventDefault(); //阻止默认事件href

    });
    //鼠标点击ul li 下的active样式切换
    $('.my-navbar-nav li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    //模态框中的标签样式切换
    $('.pull-left .my-modal-body ul li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $($('.my-modal-body ul').siblings('div')[$(this).index()]).show().siblings('div').hide();

    });

    //发布页面的导航  内容切换
    $(".my-publish ul.nav li").click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $($('.my-publish ul.nav').siblings('div')[$(this).index()]).show().siblings('div').hide();
    });
    // 发布到的切换
    $('.my-form-a a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active');
    });

     //监听页面滚动
    $(document).scroll(function () {
        $(document).scrollTop() > 0 ? $('.move-top').show() : $('.move-top').hide();
    });
    //回到顶部 点击事件
    $('.move-top').click(function () {
        $(document.documentElement).animate({scrollTop:'0'},500)
    });

    //鼠标移到内容中，显示分享的小图标

    //鼠标移到内容的图片上，将小图片变为大图片
    $(".pull-right img").each();

     //推荐的点击事件
    $('.span_click1').each(function (index,ele) {
        var isFlag1 = true;
        $(this).click(function () {
            var count1 = $($('.span_count1')[index]).text();
            if(isFlag1){
                $($('.span_count1')[index]).text(Number(count1)+1);
                $(this).css({'background-color':'red'});
                $(this).attr('title','取消推荐');
                isFlag1 = false;
            }else{
                $($('.span_count1')[index]).text(Number(count1)-1);
                $(this).css({'background-color':'white'});
                $(this).attr('title','推荐');
                isFlag1 = true;
            }
        });
    });

     //评论的点击事件
    $('.span_click2').each(function (index,ele) {
        var isFlag2 = true;
        $(this).click(function () {
            console.log($(this).index());
            if(isFlag2){
                $($('.my-comment')[index]).show();
                $(this).css({'background-color':'red'});
                isFlag2 = false;
            }else{
                $($('.my-comment')[index]).hide();
                $(this).css({'background-color':'white'});
                isFlag2 = true;
            }
        });
    });
    //关闭评论框
    $('.my-comment .close').each(function(index,ele){
        $(this).click(function () {
            $($(".my-comment")[index]).hide();
            $($(".span_click2")[index]).css({'background-color':'red'});
        })
    });

    //私藏的点击事件
    $('.span_click3').each(function (index,ele) {
        var isFlag3 = true;
        $(this).click(function () {
            if(isFlag3){
                $(this).css({'background-color':'red'});
                $(this).attr('title','移除私藏');
                isFlag3 = false;
            }else{
                $(this).css({'background-color':'white'});
                $(this).attr('title','加入私藏');
                isFlag3 = true;
            }
        });
    });

});
// 注册登录页面
function login() {
    $("#myModal").modal(
        'show'
    );
    // 为了弹出框，弹出滚动条不消失  背景不影响
    $("body").css('padding-right','0');
}

//注册 选择下一步时的操作
function btnNext() {
    $('.my-phone-register').hide();
    $('.my-info-register').show();
    $('.my-btn-next').hide();
    $('.my-btn-submit').show();
    $('.pull-right .my-modal-body ul li').last().addClass('active').siblings('li').removeClass('active');
}

// 发布
function  publish() {
    $("#myModal1").modal({
        keyboard:false
    });
    // 为了弹出框  弹出时候滚动不消失  背景不影响
    $("body").css('padding-right','0');
}