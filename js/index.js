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
    })
})
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