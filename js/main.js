// responzive nav
function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(window).scroll(function() {
    if( $(this).scrollTop() > 10) {
        $('nav').stop().animate({'marginTop': '0'}, 500);
    } else {
        $('nav').stop().animate({'marginTop': '-200px'}, 500);
    }
});

var topPos = $("#toTop").position();
var aboutPos = $("#about").position();
var skilsPos = $("#skils").position();
var portfolioPos = $("#portfolio").position();
var contactPos = $("#contact").position();

$(window).scroll(function() {
    if( $(this).scrollTop() > topPos.top-0) {
        $('a').removeClass('current');
        $('.top').addClass('current');
    }
    if( $(this).scrollTop() > aboutPos.top-500) {
        $('a').removeClass('current');
        $('.abo').addClass('current');
    }
    if( $(this).scrollTop() > skilsPos.top-500) {
        $('a').removeClass('current');
        $('.ski').addClass('current');
    }
    if( $(this).scrollTop() > portfolioPos.top-500) {
        $('a').removeClass('current');
        $('.por').addClass('current');
    }
    if( $(this).scrollTop() > contactPos.top-500) {
        $('a').removeClass('current');
        $('.con').addClass('current');
    }
});

// slow motion
function toTop() {
    $('html, body').animate({
        scrollTop: $("#toTop").offset().top - 0
    }, {duration: 2000, easing: "swing"});
} 
function toAbout() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 180
    }, {duration: 2000, easing: "swing"});
}
function toProf() {
    $('html, body').animate({
        scrollTop: $("#skils").offset().top - 55
    }, {duration: 2000, easing: "swing"});
}
function toPort() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 40
    }, {duration: 2000, easing: "swing"});
}
function toCont() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 40
    }, {duration: 3000, easing: "swing"});
}
// overmouse on photo
function bigImg(x) {
    var _photo = $("#photo");
        _photo.animate({height: '200px', width: '200px'}, {duration: 1000, easing: "linear"});
}
function normalImg(x) {
        var _photo = $("#photo");
        _photo.animate({height: '170px', width: '170px'}, {duration: 1000, easing: "linear"});
}
//skils
jQuery(document).ready(function () {  
jQuery('.skills li').each(function () {  
    jQuery(this).appear(function() {  
      jQuery(this).animate({opacity:1,left:"0px"},800);  
      var b = jQuery(this).find(".progress-bar").attr("data-width");  
      jQuery(this).find(".progress-bar").animate({  
        width: b + "%"  
      }, 1300, "linear");  
    });   
});   

    });  
   jQuery(document).ready(function(){  
jQuery('.skillbar').each(function(){  
    jQuery(this).appear(function() {  
        jQuery(this).find('.skillbar-bar').animate({  
            width:jQuery(this).attr('data-percent')  
        },5000);  
    });  
});  
    });

$(function() {
    
    var $meters = $(".meter > span");
    var $section = $('#third');
    var $queue = $({});
    
    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 1200, next);
            });
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
    
});
//portfolio
function markFourthSectionPoing(event){
  var listFourthSec = document.getElementsByClassName("fourthSectionPoint");
  for (var i = 0; i < listFourthSec.length; i++ ){
    if (listFourthSec[i] === event.currentTarget){
      listFourthSec[i].style.opacity = "1"; 
    }else{
      listFourthSec[i].style.opacity = "0.7";
    }   
  }

}
// FadeIn,FadeOut
$(document).ready(function(){

    $(".absolute").boxLoader({
        direction:"y",
        position: "100%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "100%"
});

    $(".fourthSectionPoint").boxLoader({
        direction:"y",
        position: "100%",
        effect: "fadeIn",
        duration: "2s",
        windowarea: "100%"
});
    $(".portfolio-titile").boxLoader({
        direction:"y",
        position: "100%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "100%"
});

    $(".up i").click(scroll);

});

function scroll(){

    $("html, body").animate({
        scrollTop: $(".boxes").offset().top
    }, {
        queue: false,
        duration: 1000});

}