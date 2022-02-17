//"use strict";

function dragAndDrop(visits = document.querySelectorAll(".visit")) {
  visits.forEach((visit) => {
    visit.onmousedown = function (e) {
      if (e.target.getAttribute("class") === "visit__header") {
        let coords = getCoords(visit),
          shiftX = e.pageX - coords.left,
          shiftY = e.pageY - coords.top;

        visit.style.position = "absolute";
        document.body.appendChild(visit);
        move(e);

        visit.style.zIndex = 3000;

        function move(e) {
          visit.style.left = e.pageX - shiftX + "px";
          visit.style.top = e.pageY - shiftY + "px";
        }

        document.onmousemove = function (e) {
          move(e);
        };

        visit.onmouseup = function () {
          document.onmousemove = null;
          visit.onmouseup = null;
        };
      }

      visit.ondragstart = function (event) {
        return event.preventDefault();
      };

      function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
          top: box.top + scrollY - 30,
          left: box.left + scrollX - 30,
        };
      }
    };
  });
}

export { dragAndDrop };
