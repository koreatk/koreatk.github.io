$(document).ready(function () {


    //메인슬라이드
    var swiper = new Swiper(".m_slider", {
        loop: true,
        allowTouchMove: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".m_page",
            clickable: true,
        },
    });


    // 모바일 메뉴 슬라이드 모션 효과
    $('.hambuger').on('click', function () {
        $('.menu_bg').show();
        $('.h_menu').show().animate({
            left: 0
        });
    });
    $('.cancel, .menu_bg, header .inner .header_menu .h_menu .close').on('click', function () {
        $('.menu_bg').hide();
        $('.h_menu').animate({
            left: '-' + 100 + '%'
        }, function () {
            $('.h_menu').hide();
        });
    });

    // 퀵메뉴
    var currentPosition = parseInt($("#quick_menu_right").css("top"));
    $(window).scroll(function () {
        var position = $(window).scrollTop();
        $("#quick_menu_right").stop().animate({
            "top": position + currentPosition + "px"
        }, 700);
    });

    // page 버튼
    $('.board_txt .b_page_btn ul li').click(function () {
        $('.board_txt .b_page_btn ul li').removeClass('active')
        $(this).addClass('active')
    });

    // 퀵메뉴 닫기
    $('#quick_menu_right .inner .quick_util .quick_close').click(function () {
        $('#quick_menu_right').hide();
    });


})