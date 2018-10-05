var alllink = $("div");
$( document ).ready(function() {
  $("#gridview").click(function(){
    $("div").removeClass("col-lg-12 col-lg-8 col-lg-4");
    $("#row").addClass("row");
    $("#listview").addClass("column");
    $("#cols").addClass("card");
    $("#card-body").addClass("card-body");
    $("#product").addClass("product-description");
  //  $("img").css({"height":"50%","width":"85%"})
    $(".column").css({"width":"50%"});
  });
  $("#listbutton").click(function(){
    $("div").removeClass("row product-description");
    $(".column").addClass("col-lg-12");
    $(".card").addClass("col-lg-8");
    $(".card-body").addClass("col-lg-4");
  //  $("img").css({"height":"20%","width":"50%"})
    $(".column").css({"width":"100%"});
  //  $(".row").css({"height":"50%","width":"100%"});
  });

});
