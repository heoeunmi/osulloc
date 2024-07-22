$(document).ready(function () {

    //gotop
    $(".gotop").hide();
    //스크롤을 500이상이 되었을때 
    //맨위로가기 버튼이 fadeIn
    //스크롤을 500이하이 되었을때 
    //맨위로가기 버튼이 fadeout
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".gotop").fadeIn();
        }

        else {
            $(".gotop").fadeOut();
        }

    });


    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000) {
            $("body").addClass("on");
        } else {
            $("body").removeClass("on");
        }
    });




    /* mb */
    const mb = new Swiper('.mb', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        loop: true,
    });

    $(".play").hide();
    //.pause를 클릭했을 때
    // mb슬라이드의 자동재생(autoplay)을 멈춰라(stop)
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });

    $(".play").click(function () {
        mb.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });
    /* mb */

    const news = new Swiper('.news', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        direction: "vertical",
    });

    //prd_list
    const prd_list = new Swiper('.prd_list', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 1.5, //한줄에 보이는 슬라이드 개숫, 기본값 = 모바일 개수
        spaceBetween: 20, // 사진 사이의 간격 px

        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false, // 슬라이드를 드래그 했을 때 보이는 여부
            dragSize: 200, // 드래그 w 사이즈
        },
    });

    $(".prd_list li a img:nth-child(2)").hide();
    $(".prd_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });


    //.tab_btn li 1,2,3,4를 클릭했을 때
    //.tab_img li 1,2,3,4를  보여라(형제들은 숨겨라)
    // $(".tab_img li:not(:first-child").hide();
    // $(".tab_btn li:nth-child(1)").click(function () {
    //     $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
    //     $(this).addClass("on").siblings().removeClass("on");
    // });

    // $(".tab_btn li:nth-child(2)").click(function () {
    //     $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
    //     $(this).addClass("on").siblings().removeClass("on");
    // });

    // $(".tab_btn li:nth-child(3)").click(function () {
    //     $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
    //     $(this).addClass("on").siblings().removeClass("on");
    // });

    // $(".tab_btn li:nth-child(4)").click(function () {
    //     $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
    //     $(this).addClass("on").siblings().removeClass("on");
    // });

    $(".tab_btn li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index(); // .tab_btn li클릭한 요소 번호 찾아 변수에 넣으시오
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut(); //변수와 같은 tab_img를 페이드 인, 나머지는 fadeout으로 
    });

    //museum 
    $(".museum_list li:nth-child(1)").addClass("active");
    $(".museum_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

});