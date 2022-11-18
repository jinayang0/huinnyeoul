$(function () {
  //  isotope
  $(".shop_list").waitForImages(function () {
    var $container = $(".products_list");
    $container.isotope({
      filter: "*",
    });

    $(".btn_list a").click(function () {
      $(".btn_list .active").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine: "jquery",
        },
      });
      return false;
    });
  });
});
