//
"use strickt";
//

$(document).ready(function (event) {
  function endLoad() {
    $(".load-more_btn").html(`<img src="img/Forma 1.png">Load More`);
  }
  $(".load-more_btn").click((event) => {
    $($(".load-more_btn")).html(`<div class="lds-dual-ring"></div>`);
    setTimeout(endLoad, 2000);
  });
  //Section "Our Services"!!!

  $(".tab_option").click(function (event) {
    $(".tab_option-active").removeClass("tab_option-active");
    $(".active_option").removeClass("active_option");
    $(this).addClass("tab_option-active");
    $(
      `.our-services_content_item[data-category = ${$(this).attr(
        "data-category"
      )}]`
    ).addClass("active_option");
  });
  //===========================================================================================//
  //Section "Our Amazing Work"!!!
  //Pressets
  let menuOptions = $(".amazing-work_menu>li"); //<---Фильтры
  const btnAddImages = $(".amazing-work_content_container >div> button"); //<---Кнопка "добавить фото"
  let filter = "all"; //<---Переменная для записи "активного" фильтра в начальной позиции
  //Add functions on click events
  //Function for Option Filter
  function filterImgsOption(event, option = this) {
    //Визуализация активного фильтра
    $(".active_filter").removeClass("active_filter");
    $(option).addClass("active_filter");
    //----------
    $(".amazing-work_images_item>img[data-filter_active]")
      .closest("div")
      .css("display", "none");
    $(`.amazing-work_images_item>img[data-filter_active]`)
      .filter($(`[alt = ${$(option).attr("data-marker")}]`))
      .closest("div")
      .show(200);
    return (filter = option);
  }
  //Function to show all "active" images
  function filterImgsAll(event) {
    //Визуализация активного фильтра
    $(".active_filter").removeClass("active_filter");
    $(menuOptions[0]).addClass("active_filter");
    //-----
    $(`.amazing-work_images_item>img[data-filter_active]`)
      .closest("div")
      .show(200);
    return (filter = "all");
  }
  //Add filter functions on "click" event
  $(".amazing-work_menu>li:not(:first-of-type)").click(filterImgsOption);
  $(menuOptions[0]).click(filterImgsAll);
  //"Add more images" button on click
  let counterBtnClick = 0; //<---Счетчик кликов кнопки "load more"

  btnAddImages.click(function (event) {
    setTimeout(() => {
      switch (counterBtnClick) {
        case 0:
          for (let firstGrImage of firstImagesGroup) {
            $(".amazing-work_images").append(firstGrImage);
          }
          $(".first_images_group>img").attr("data-filter_active", true);
          $(".first_images_group").removeClass("first_images_group");
          !(filter === "all")
            ? filterImgsOption(event, filter)
            : filterImgsAll(event);
          return counterBtnClick++;
        case 1:
          for (let secondGrImage of secondImagesGroup) {
            $(".amazing-work_images").append(secondGrImage);
          }
          $(".second_images_group>img").attr("data-filter_active", true);
          $(".second_images_group").removeClass("second_images_group");
          !(filter === "all")
            ? filterImgsOption(event, filter)
            : filterImgsAll(event);
          return btnAddImages.css("display", "none");
      }
    }, 2000);
  });
  //===============================================================================================//
  //Section "WHAT PEOPLE SAY ABOUT THEHAM"
  //Slider
  //Pressets
  const images = packImages;
  left_btn.onclick = left;
  right_btn.onclick = right;
  let slides = $(".slider_item");
  let step1 = 0;
  let step2 = 5;
  const edge = images.length - 1;
  //Вывод картинок
  for (let j = 0; j < slides.length; j++) {
    $(slides[j]).html(images[j]);
  }
  //================================================
  //Functions
  function left() {
    //-----------------
    ++step1;
    ++step2;
    //-----------------
    if (step1 === edge + 1) {
      step1 = 0;
    }
    if (step2 === edge + 1) {
      step2 = 0;
    }
    //-------------------
    left_btn.onclick = false;
    let copy = $(".slider_item:nth-child(1)").clone();
    copy.css("left", "500px");
    $(copy).html(images[step2]);
    //-------------------
    $(".slider_item:nth-child(1)").remove();
    $(`.slider_item:nth-child(1)`).css("left", `0px`);
    $(`.slider_item:nth-child(2)`).css("left", `100px`);
    $(`.slider_item:nth-child(3)`).css("left", `200px`);
    $(`.slider_item:nth-child(4)`).css("left", `300px`);
    $(`.slider_item:nth-child(5)`).css("left", `400px`);
    //-------------------
    setTimeout(() => {
      copy.appendTo(".slider");
      left_btn.onclick = left;
    }, 500);
  }
  function right() {
    //-----------
    --step1;
    --step2;
    //-----------
    if (step2 === -1) {
      step2 = edge;
    }
    if (step1 === -1) {
      step1 = edge;
    }
    //-----------
    right_btn.onclick = false;
    let copy = $(".slider_item:nth-child(3)").clone();
    copy.css("left", "0");
    $(copy).html(images[step1]);
    //-----------
    $(".slider_item:nth-child(6)").remove();
    $(`.slider_item:nth-child(1)`).css("left", `100px`);
    $(`.slider_item:nth-child(2)`).css("left", `200px`);
    $(`.slider_item:nth-child(3)`).css("left", `300px`);
    $(`.slider_item:nth-child(4)`).css("left", `400px`);
    $(`.slider_item:nth-child(5)`).css("left", `500px`);
    //------------------
    setTimeout(() => {
      copy.prependTo(".slider");
      right_btn.onclick = right;
    }, 500);
  }
  //Активация первого слайда
  $(".slide_content").html(contentForImages.PHILLIPS);
  $(".slider_item:nth-child(2)>img:nth-child(1)").attr("data-checked", "true");
  $(".slider_item>img[data-checked = true]").css({ top: "-20px" });
  document.querySelector(".slider").addEventListener("click", function (event) {
    if (event.target.tagName == "IMG") {
      //Клонируем "image" для вставки
      let central_image = $(event.target).clone(false);
      //Вставляем клон в "Central Image"
      $(".central_image").html(central_image);
      //Вставляем текст для соответствующей картинки
      $(".slide_content").html(contentForImages[$(event.target).attr("alt")]);
      //Анимация картинки
      $(".slider_item>img[data-checked = true]").animate({ top: "0" }, 200);
      $(".slider_item>img[data-checked = true]").attr("data-checked", "false");
      $(event.target).animate({ top: "-20px" }, 200);
      $(event.target).attr("data-checked", "true");
    }
    //Section "Gallery of best images"
    //"Masonry" plugin with JQ
  });

  $(".grid2").masonry({
    itemSelector: ".grid-item2",
    columnWidth: 1,
  });
  $(".grid1").masonry({
    itemSelector: ".grid-item",
    columnWidth: 50,
  });
  var $grid = $(".grid1").masonry({
    columnWidth: 50,
  });
  //Load more images
  $(".gallery>button").on("click", function () {
    var $items = $(moreBestImages);
    setTimeout(() => {
      // append items to grid
      $grid
        .append($items)
        // add and lay out newly appended items
        .masonry("appended", $items);
      $(".gallery>button").css("display", "none");
    }, 2000);
  });
});
