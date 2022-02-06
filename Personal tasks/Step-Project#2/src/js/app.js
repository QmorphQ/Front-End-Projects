//----------------
"use strict"; //+
//----------------

$(() => {
  //====================================================
  const menu = $(".header__nav-menu");
  //====================================================
  function animateBurger() {
    $(".bar").toggleClass("animate");
  }
  //----------------------------------------------------
  function toggleHeaderMenu() {
    //-------
    $(".body").off("click", showMenu);
    $(".bar").removeClass("hamburger-btn");
    //-------
    animateBurger();
    //-------
    setTimeout(() => {
      menu.toggleClass("active");
      $(".bar").addClass("hamburger-btn");
      $(".body").on("click", showMenu);
    }, 400);
  }
  //-----------------------------------------------------
  function showMenu(event) {
    let target = $(event.target);
    if (target.is(".hamburger-btn") || !target.is(".nav-menu__item") && menu.hasClass("active")) {
      toggleHeaderMenu();
    }; 
  };
  //-----------------------------------------------------
  $("body").on("click", showMenu);
  //=====================================================
});
