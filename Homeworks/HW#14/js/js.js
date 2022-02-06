//Кнопка "slideToggle" установлена под секцией "MOST POPULAR POSTS".
//
"use strickt";
//

$(document).ready(function (event) {
  $(document).scroll("#surf_back-btn", () => {
    document.documentElement.scrollTop > 400
      ? $("#surf_back-btn").show("1000")
      : $("#surf_back-btn").hide("200");
  });
  $(".surf_link, #surf_back-btn").click('a[href^="#"]', (event) => {
    event.preventDefault();
    let srcElement = $(event.target).attr("href");
    let destElement = $(srcElement).offset().top;
    $("html, body").animate({ scrollTop: destElement }, 500);
  });
  $("#hide_btn").click(() => {
    $(".section__most-popular-posts").slideToggle(1000);
  });
});
