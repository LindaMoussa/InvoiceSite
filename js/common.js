var isTrue = true;
$('.side-nav-icon a').click(function () {
    if (isTrue) {



        $("aside.side-menu").show("fast", function () {
            $('aside.side-menu').addClass('open-menu').removeClass('close-menu');
        });
        setInterval(function () {
            var x = $("aside").width();
            $("nav").css('margin-right', x);
        }, 10);
        $(" .fa-bars").removeClass("fa-rotate-90");
        $(".content").css('padding-right', '250px');


        isTrue = !isTrue;
    } else {
        
        $('aside.side-menu').addClass('close-menu').removeClass('open-menu');
        
        $(" .fa-bars").addClass("fa-rotate-90");
        $(".content").css('padding-right', '0px');
        $("nav").css('margin-right', '0px');
        isTrue = !isTrue;
    }
});

$(function() {
            $("#datepicker").datepicker();
            $(".datepicker").datepicker();
    
        });


$(document).ready(function () {
    $("body").tooltip({
        selector: '[data-toggle=tooltip]'
    });
});
