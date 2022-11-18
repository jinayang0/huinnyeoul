//header js
$(function () {
  $("#gnb>.huinnyeoulstory").mouseover(function () {
    $(".sub").stop().slideDown(500);
    $(".sub_box").stop().slideDown(500);
  });

  $("#gnb>.huinnyeoulstory").mouseleave(function () {
    $(".sub").stop().slideUp(750);
    $(".sub_box").stop().slideUp(750);
  });
});

//top 버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    // 높이
    $("#top_btn").fadeIn();
  } else {
    $("#top_btn").fadeOut();
  }
});

//AOS
AOS.init();
