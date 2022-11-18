$(function () {
  $("#gnb>li").mouseover(function () {
    $(this).children(".sub").stop().slideDown(750);
  });
  //stop을 넣어야 슬라이드 다운되는 도중에 li에서 마우스가 나가도 동작을 취소하고 바로 다음 동작을 할 수 있다.
  $("#gnb>li").mouseleave(function () {
    $(this).children(".sub").stop().slideUp(500);
  });
}); //모든 내용이 이 안에 들어감
