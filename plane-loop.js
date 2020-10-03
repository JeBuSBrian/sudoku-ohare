$(document).ready(function() {
  function loop() {
    $("#plane").css({right: '1500px'});
    $("#plane").animate(
      {right: "-=3000px"},
      9000,
      function() {
        loop();
      }
    );
  }
  loop();
});