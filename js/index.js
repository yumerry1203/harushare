$(document).ready(function(){
    $(window).scroll(function () { 
        const scrollValue = $(document).scrollTop(); 
        const section1Top = $('#section1').offset().top;
        if(scrollValue >= section1Top){
            $('.sticky').css({"opacity":1});
        }else{
            $('.sticky').css({"opacity":0});
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("loginBtn");
    var closeBtn = document.getElementsByClassName("close")[0];
    var kakaoLoginBtn = document.getElementById("kakaoLoginBtn");

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    kakaoLoginBtn.onclick = function() {
        window.location.href = "/login";
    }
    });

    
/*     window.addEventListener('scroll', function() {
    var stickyButton = document.getElementById('sticky-button');
    var mainSection = document.querySelector('main');
    var footerSection = document.querySelector('footer');

    var mainBottom = mainSection.getBoundingClientRect().bottom;
    var footerTop = footerSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    const section2Top = this.document.querySelector('#section2');

    if (mainBottom <= windowHeight && footerTop > windowHeight) {
        stickyButton.style.opacity = '1';
    } else {
        stickyButton.style.opacity = '0';
    }
}); */


/* GSAP 효과 */
    let funcObj={
        f_0:function(){
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
        f_1:function(){
        const tl = gsap.timeline();
        tl.to("#section1 > *", {
            opacity: 1,
            stagger: 0.3,
            y: -30,
        });
        },
        f_2:function(){
        const tl = gsap.timeline();
        tl.to("#section2 > *", {
            opacity: 1,
            stagger: 0.3,
            y: -30,
        });
        },
        f_3:function(){
        const tl = gsap.timeline();
        tl.to("#section3 > *", {
            opacity: 1,
            stagger: 0.3,
        });
        },
        f_4:function(){
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
    
    window.addEventListener('scroll', function(){
    
        let scroll = document.scrollingElement.scrollTop;
        let outHeight = this.window.outerHeight; 
    
        for(let i =0; i<section.length;i++){
        if(scroll > section[i].offsetTop - outHeight &&
            scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
            funcObj['f_'+i]();
        }
        };
    
    });