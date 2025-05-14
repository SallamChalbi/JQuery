/// <reference types="../@types/jquery" />



$(function() {
    //! Navbar
    $('#logo').on('click', function () {
        $('.nav-link').removeClass('active');
        $('.nav-link[href="#home"]').addClass('active');
    });

    $('.nav-link').on('click', function (e) {
        $('.nav-item .active').removeClass('active');
        $(e.target).addClass('active');
        
        /* const currentHref = e.target.getAttribute('href');
        const sectionOffset = $(currentHref).offset().top;
        $('html, body').animate({scrollTop: sectionOffset}, 1000); */
    });

    $('.fa-sun, .fa-moon').on('click', function () {
        $('.fa-sun').toggleClass('d-none');
        $('.fa-moon').toggleClass('d-none');
    });

    $('.menu-btn').on('click', function () {
        $('.navbar-expand-sm .navbar-nav').toggleClass('show');
    });

    //! Services
    $('.services__content .open-modal').on('click', function(e) {
        // $('#services-modal').removeClass('d-none');
        const modal = e.currentTarget.dataset.modal;
        $(modal).removeClass('d-none');
        $('.services-model .services__modal-close').on('click', function(e){
            $(modal).addClass('d-none')
        })
    });

    //! Scroll/Load Screen
    $(window).on('scroll load', function() {
        const windowTop = $(window).scrollTop();
        homeScroll(windowTop)
        changeNavColor(windowTop);
    })

    function changeNavColor(windowTop) {
        const sections = $('.section')
        let lastElement;
        
        for (let i = sections.length - 1; i >=0 ; i--) {
            const element = sections[i].getAttribute('id');
            const elementTop = $(`#${element}`).offset().top
        
            if(windowTop >= elementTop - 56){ // -56 ==> navbar height
                lastElement = element;
                break;
            }
        }    
    
        $('.nav-item .active').removeClass('active');
        $(`.nav-link[href="#${lastElement}"]`).addClass('active');
    }

    function homeScroll(windowTop){
        if(windowTop >= $('#home__scroll').offset().top -56){
            $('.scroll').css({'bottom': '5rem'})
        }else{
            $('.scroll').css({'bottom': '-2rem'})
        }
    }


    $('.loader').fadeOut(1000, function() {
        $('.loading').slideUp(500, function() {
            $('body').css('overflow', 'auto');
        });
    })
});
