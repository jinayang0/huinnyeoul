$(function () {
  /*자세히 보기 버튼(.more a)을 클릭하면 팝업(.popup)이 나타나고(fadeIn),
    x버튼(.close)을 클릭하면 팝업(.popup)이 사라진다(fadeOut)*/
  $(".nowevent a").click(function () {
    $(".popup").fadeIn();
  }); //more a를 클릭했을 때 일어나는 일
  $(".close").click(function () {
    $(".popup").fadeOut();
  });
});
