"use strict";

function createVisitObserver (targetNodeClassName, config = {}) {
    let callbackFunc = function () {
        return document.querySelectorAll(".visit").length === 0 ? document.querySelector(".desk-text").textContent = `No visits has been added` : document.querySelector(".desk-text").textContent = ``; 
},
        observer = new MutationObserver(callbackFunc);
    return function (value) {
        value ? observer.observe(document.querySelector("." + targetNodeClassName), config) : observer.disconnect();
    }
}

export { createVisitObserver };


