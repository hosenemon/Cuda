$(document).ready(function(){



    //mixitup control
    var mixer = mixitup('.portfolio_filter');
    
    
        //header fixd

        var headerPosition = $('.header').offset().top;
        $(window).scroll(function(){
            var scrollValue = $(window).scrollTop();
            if(scrollValue > headerPosition){
                $('.header').addClass('fixed');
            }else{
                $('.header').removeClass('fixed');
            }
        });

        //menu toggle active
        $('.nav-item').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            
        });

        $('a[href^="#"]').click(function(e){
            e.preventDefault();
            var target = this.hash;
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500);
        });
        //remove anchor link
        
        
        //go top

        $(window).scroll(function(){
            if($(this).scrollTop() > 300) {
                $('.go_top').fadeIn();
            }else{
                $('.go_top').fadeOut();
            }
        });
        
        $(".go_top").click(function() {
            $('html, body').animate({
                scrollTop: parseInt($("body").offset().top)
            })
        })
       
    







});