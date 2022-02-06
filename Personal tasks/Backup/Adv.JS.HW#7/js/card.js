//==============
"use strict"; //+
//==============

//======================================================
//--------------------------------------

class Card {
  constructor(post, users_list, card_selector = "card") {
    this.title = post.title;
    this.userId = post.userId;
    this.text = post.body;
    this.post_id = post.id
    this.name = users_list.find((e) => e.id === this.userId).name;
    this.email = users_list.find((e) => e.id === this.userId).email;
    this.card_selector = card_selector;
    this.card_htmlElement = ((selector = this.card_selector) => {
      return `
        <div class="${selector}" data-id="${this.post_id}">
          <div class="${selector}__header">
            <h2 class="${selector}__title"></h2>
            <a href="" class="${selector}__delete"></a>
          </div>
          <div class="${selector}__main">
            <p class="${selector}__text"></p>
          </div>
          <div class="${selector}__footer">
            <span class="${selector}__name"></span>
            <span class="${selector}__email"></span>
          </div>
        </div>
      `;
    })();
  }
  create_card (element_selectorToAdjust, position = "afterbegin") {
    try {
        document.querySelector(`.${element_selectorToAdjust}`).insertAdjacentHTML(position, this.card_htmlElement);
    }
    catch (error) {
        console.log(error);
    }
    finally{
      if (document.querySelector(`.${this.card_selector}__delete`)){
        let btn = document.querySelector(`.${this.card_selector}__delete`);
        btn.addEventListener("click", () => {
          let node = document.querySelector(`.${this.card_selector}[data-id="${this.post_id}"]`);
          node.parentNode.removeChild(node);
          console.log("Deleted");
        });
        console.log("Delete btn added");
      }
    }
  };
}

export { Card };
