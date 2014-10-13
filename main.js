$(document).ready(function(){
  var s = skrollr.init({
    render: function(data) {
      $('#info').text(data.curTop);
    }
  });

  var s = skrollr.init(/*other stuff*/);

//The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,

    //The easing function to use.
    easing: 'sqrt',

    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 2,

    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        return 500;

        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        //return Math.abs(currentTop - targetTop) * 10;
    },

    //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
    //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
    handleLink: function(link) {
        return 400;//Hardcoding 400 doesn't make much sense.
    },

    //By default skrollr-menu will only react to links whose href attribute contains a hash and nothing more, e.g. `href="#foo"`.
    //If you enable `complexLinks`, skrollr-menu also reacts to absolute and relative URLs which have a hash part.
    //The following will all work (if the user is on the correct page):
    //http://example.com/currentPage/#foo
    //http://example.com/currentDir/currentPage.html?foo=bar#foo
    ///?foo=bar#foo
    complexLinks: false
});
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 200) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


