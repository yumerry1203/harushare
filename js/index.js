$(document).ready(function () {
    $(window).scroll(function () {
        const scrollValue = $(document).scrollTop();
        const section1Top = $('#section1').offset().top;
        if (scrollValue >= section1Top) {
            $('.sticky').css({ "opacity": 1 });
        } else {
            $('.sticky').css({ "opacity": 0 });
        }
    });

    /* 구매하기  */
    $(".ott_item li").click(function () {
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        $(this).parent().parent().next().stop().fadeIn();
    });
    $(".netflix_price li, .youtube_price li").click(function () {
        $(this).siblings().children().children().attr("src", "image/ticket_black.png");
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.netflix_price li.active, .youtube_price li.active').children().children().attr("src", "image/ticket_white.png");
        $(this).parent().parent().parent().next().stop().fadeIn();

        const offset = $('#total_price').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    });

    /* 마이페이지 - 복사 완료 토스트 메세지 */
    const toast = document.querySelector(".alert-copy");
    const copyBtn = document.querySelectorAll('img.copy');
    let isToastShown = false;
    copyBtn.forEach(function (btn) {
       
        btn.addEventListener('click', function () {
            if(isToastShown) return;
            isToastShown = true;
            toast.classList.add("show");
            setTimeout(function () {
                toast.classList.remove("show");
                isToastShown = false;
            }, 2700);
        })
    });

    /* 자주 묻는 질문 = 아코디언 */
    $('.question').click(function () {
        $(this).siblings(".question").removeClass("active");
        $(this).siblings(".answer").stop().slideUp();
        $(this).next().stop().slideToggle();
    });


});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("loginBtn");
    var closeBtn = document.getElementsByClassName("close")[0];
    var kakaoLoginBtn = document.getElementById("kakaoLoginBtn");

    btn.onclick = function () {
        modal.style.display = "flex";
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    kakaoLoginBtn.onclick = function () {
        window.location.href = "/login";
    }
});


/* GSAP 효과 */
let funcObj = {
    f_0: function () {
        const tl = gsap.timeline();
        tl.to("#section0", {
            opacity: 1,
            stagger: 0.2,
            y: -30,
        });
        tl.to("#section0 .bg > *", {
            opacity: 1,
            stagger: 0.3,
        });
    },
    f_1: function () {
        const tl = gsap.timeline();
        tl.to("#section1 > *", {
            opacity: 1,
            stagger: 0.3,
            y: -30,
        });
    },
    f_2: function () {
        const tl = gsap.timeline();
        tl.to("#section2 > *", {
            opacity: 1,
            stagger: 0.3,
            y: -30,
        });
    },
    f_3: function () {
        const tl = gsap.timeline();
        tl.to("#section3 > *", {
            opacity: 1,
            stagger: 0.3,
        });
    },
    f_4: function () {
        const tl = gsap.timeline();

        tl.to("#section4 > *", {
            opacity: 1,
            stagger: 0.3,
            y: -30,
        });
        tl.to("#section4 .img_wrap > .deco ", {
            opacity: 1,
            stagger: 0.3,
            y: -30,
        });
    },
};

let section = document.querySelectorAll('section');

funcObj['f_0']();

window.addEventListener('scroll', function () {

    let scroll = document.scrollingElement.scrollTop;
    let outHeight = this.window.outerHeight;

    for (let i = 0; i < section.length; i++) {
        if (scroll > section[i].offsetTop - outHeight + 250 &&
            scroll < section[i].offsetTop - outHeight + section[i].offsetHeight) {
            funcObj['f_' + i]();
        }
    };

});