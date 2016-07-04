$(function() {
  $("#burger").click(function() {
    $("#overlay").toggleClass("overlay--active");
  });

  $("#overlayClose").click(function() {
    console.log("CLICK CLOSE")
      $("#overlay").toggleClass("overlay--active");
  });
});
