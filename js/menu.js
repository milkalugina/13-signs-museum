$(document).ready(function() {
  $(".menu_icn").click(function() {
    $(".menu").addClass("show");
  });
});

$(document).ready(function() {
  $(".logo_icn").click(function() {
    $(".menu").removeClass("show");
  });
});
