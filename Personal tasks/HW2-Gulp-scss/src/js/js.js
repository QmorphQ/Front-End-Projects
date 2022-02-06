//-------------
"use strickt";
//-------------

$(() => {
  $(".hamburger-menu").on("click", () => {
    setTimeout(() => {
      $(".menu-links").toggleClass("active");
    }, 500)
  });

  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
  });
});
