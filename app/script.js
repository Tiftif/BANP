/*carousel*/

intervalCarousel1 = setInterval(function() {
  currentSlide = $carousel.attr('data-slide');
  nextSlide = +currentSlide === 4 ? 1 : +currentSlide + 1;
  $carousel.attr('data-slide', nextSlide);
}, 3150);

intervalCarousel2 = setInterval(function() {
  currentSlide = $carousel2.attr('data-slide');
  nextSlide = +currentSlide === 4 ? 1 : +currentSlide + 1;
  $carousel2.attr('data-slide', nextSlide);
}, 3200);

intervalCarousel3 = setInterval(function() {
  currentSlide = $carousel3.attr('data-slide');
  nextSlide = +currentSlide === 4 ? 1 : +currentSlide + 1;
  $carousel3.attr('data-slide', nextSlide);
}, 3250);

intervalCarousel4 = setInterval(function() {
  currentSlide = $carousel4.attr('data-slide');
  nextSlide = +currentSlide === 4 ? 1 : +currentSlide + 1;
  $carousel4.attr('data-slide', nextSlide);
}, 3300);



var $carousel = $('#carousel1'),
  currentSlide, nextSlide;

var $carousel2 = $('#carousel2'),
  currentSlide, nextSlide;

var $carousel3 = $('#carousel3'),
  currentSlide, nextSlide;

var $carousel4 = $('#carousel4'),
  currentSlide, nextSlide;


//bg color selector
$(function() {
  $(".color").click(function() {
    var color = $(this).attr("data-value");
    $("body").css("background-color", color);
  });
});

// CURSOR
$(".pelle").click(function() {
  document.body.style.cursor = "url('img/cursor/pelle.gif'), auto";
});

$(".visse").click(function() {
  document.body.style.cursor = "url('img/cursor/visse.gif'), auto";
});

$(".finger").click(function() {
  document.body.style.cursor = "url('img/cursor/finger.png'), auto";
});

// font
$(".arial").click(function() {
  document.body.style.fontFamily = "arial";
});
$(".comic").click(function() {
  document.body.style.fontFamily = "comic";
});

$(".impact").click(function() {
  document.body.style.fontFamily = "impact";
});
$(".courier").click(function() {
  document.body.style.fontFamily = "Courier";
});



/*PROG SECTION VIDE */
var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

var logos = document.querySelectorAll('.logo');
forEach(logos, function(index, element) {
  var RNGID = Math.random() + ''
  element.getElementById('leftClip').id = RNGID
  element.getElementsByClassName('leftGroup')[0].setAttribute('clip-path', 'url(#' + RNGID + ')')
  var RNGID = Math.random() + ''
  element.getElementById('rightClip').id = RNGID
  element.getElementsByClassName('rightGroup')[0].setAttribute('clip-path', 'url(#' + RNGID + ')')
});


/* INFO */

$(document).ready(function() {
  /*         <----------- Variables ----------------->               */
  var texts, back, index, x, count, p, time, div;
  texts = ['MUCEM      ',
    "DU 31 MAI AU 2 JUIN          ",
    ' 7 Prom. Robert Laffont, 13002 Marseille    '
  ];
  back = false;
  index = 0;
  count = 0;
  time = 150;
  p = $('p.write');
  div = $('div');
  /*         <----------- Variables ----------------->               */

  function write() {
    x = setInterval(function() {
      /*      <-   False      ->        */
      if (back == false) {
        time = 80;

        p.text(p.text() + texts[index][count]);
        count++;
        if (count == texts[index].length) {
          clearInterval(x);
          back = true;
          if (index == texts.length - 1) {
            index = 0
          } else {
            index++
          }
          write();
        };

      }
      /*      <-   False      ->        */
      /*      <-   [  True ]      ->        */
      else {
        time = 150

        count--;
        p.text(p.text().slice(0, count))


        if (count == 0) {
          clearInterval(x);
          back = false;
          write();
        }

      }
      /*      <-   [  True ]      ->        */
    }, time);

  };
  write();

});
