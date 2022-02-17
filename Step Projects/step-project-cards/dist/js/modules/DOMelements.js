//==============
"use strict";//+
//==============

//DOM elements:
  //-----------------------------------------------------------------------
  const autorizationBtn = document.querySelector(".header__btn-autorization"),//Кнопка входа
    createVisitBtn = document.querySelector(".header__btn-create-visit"),//Кнопка создать визит
    autorizationWindow = document.querySelector(".header__modal-window"),//Окно входа
    emailInput = document.querySelector(`input[name="email"]`), //Поле email
    passwordInput = document.querySelector(`input[name="password"]`),//Поле password
    searchDropDown = document.querySelector(".js-dropdown-menu"),//Filter
    searchInput = document.querySelector(".js-doctor-filter-input"),//Filter
    sortByPriority = document.querySelector(".js-dropdown-sort");//Filter
  //------------------------------------------------------------------------

  export { autorizationBtn, createVisitBtn, autorizationWindow, emailInput, passwordInput, searchDropDown, searchInput, sortByPriority};