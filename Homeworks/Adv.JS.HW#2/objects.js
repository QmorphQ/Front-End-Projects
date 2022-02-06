//---------------
"use strict"; //+
//---------------

//=================================================================================
class Game {
  constructor(
    player,
    mole,
    displayResultClass,
    fieldClass,
    previousFieldClass,
    currentFieldClass,
    playerFieldClass,
    moleFieldClass,
    inputOptionClass,
    interfaceWindowClass,
    btnGoSelector,
    btnPauseSelector,
    btnRestartSelector
  ) {
    //-------------------------
    //Main Properties:
    this.player = player;
    this.mole = mole;
    //Classes:
    this.displayResultClass = displayResultClass;
    this.fieldClass = fieldClass;
    this.previousFieldClass = previousFieldClass;
    this.currentFieldClass = currentFieldClass;
    this.playerFieldClass = playerFieldClass;
    this.moleFieldClass = moleFieldClass;
    this.inputOptionClass = inputOptionClass;
    this.interfaceWindowClass = interfaceWindowClass;
    //Selectors:
    this.btnGoSelector = btnGoSelector;
    this.btnPauseSelector = btnPauseSelector;
    this.btnRestartSelector = btnRestartSelector;

    //-------------------------
    //Partial Properties:
    //Selectors:
    this.fieldSelector = `.${fieldClass}`;
    this.displayResultSelector = `.${displayResultClass}`;
    this.interfaceWindowSelector = `.${interfaceWindowClass}`;
    this.inputOptionSelector = `.${inputOptionClass}`;
    this.previousFieldSelector = `.${previousFieldClass}`;
    this.playerSelector = `[data-marked=${player}]`;
    this.moleSelector = `[data-marked=${mole}]`;
    //Start conditions:
    this.level = "1500";
    this.playerScore = 0;
    this.moleScore = 0;
    this.totalFieldsNumber = $(this.fieldSelector).length;
  }
  
  //-------------------------
  //Methods:
  //-----------
  //Getters&Setters:
  //-----------
  //Getters:
  //-----------
  //Setters:
  //-----------
  //Service methods:
  log(value) {
    return console.log(value);
  }
  //=====================================
  //Random generator:
  generator(max) {
    return Math.round(Math.random() * max);
  }

  //---------------------------
  //function toggle class:
  switchClass(elem, classToAdd, classToDel) {
    return $(elem).addClass(classToAdd).removeClass(classToDel);
  }

  //---------------------------
  //Counter of elements:
  elem_counter(elemSelector) {
    return $(elemSelector).length;
  }

  //---------------------------
  //End game:
  endGame(x, y, n, func, funcArg) {
    if (x > n / 2 || y > n / 2 || (x === n / 2 && y === n / 2)) {
      func(funcArg);
      this.displayResult(
        this.displayResultSelector,
        this.getWinner(this.moleSelector, this.playerSelector)
      );
      $(this.interfaceWindowSelector).fadeIn(300);
    }
  }

  //---------------------------
  //Displey Result:
  displayResult(elemToAddScores, winner) {
    return $(elemToAddScores).html(
      `<p>The winner is ${winner} with ${this.elem_counter(
        `[data-marked="${winner}"]`
      )} scores</p>`
    );
  }

  //---------------------------
  //Winner:
  getWinner(firstPlayerSelector, secondPlayerSelector) {
    let x = this.elem_counter(firstPlayerSelector);
    let y = this.elem_counter(secondPlayerSelector);
    if (x > y) {
      return $(firstPlayerSelector).attr("data-marked");
    } else if (x < y) {
      return $(secondPlayerSelector).attr("data-marked");
    } else {
      return "Draw";
    }
  }

  //---------------------------
  //Mark field:
  mark_field(elemClass, player) {
    return $(elemClass).attr("data-marked", `${player}`);
  }

  //---------------------------
  //Listener to get difficulty level:
  addLevel() {
    $(this.inputOptionSelector).change((event) => {
      return (this.level = $(event.target).val());
    });
  }

  //---------------------------
  //GAME Core Code:
  runGame() {

    //----------------------------
    //PreProcedures:

    //-----------------------------
    //Hide InterfaceWindow:
    $(this.interfaceWindowSelector).fadeOut(300);
    //Listener fo Restart button:
    $(this.btnRestartSelector).on("click", () => {
      document.location.reload();
    });

    //-----------------------------
    //Game Process:
    let intervalId = setInterval(() => {
      //----------------------------
      //Choose new random field:
      let elem = $(this.previousFieldSelector)[
        this.generator(this.elem_counter(this.previousFieldSelector)) - 1
      ];

      //-----------------------------
      //Check scores and go/end:
     this.endGame(
        this.elem_counter(this.playerSelector),
        this.elem_counter(this.moleSelector),
        this.totalFieldsNumber,
        clearInterval,
        intervalId
      );

      //-----------------------------
      //Ingame procedures:
      //Mole acts:
      this.switchClass(
        elem,
        this.currentFieldClass,
        this.previousFieldClass
      );
      let timerID = setTimeout(() => {
        this.switchClass(
          elem,
          this.moleFieldClass,
          `${this.currentFieldClass} ${this.previousFieldClass}`
        );
        //-------------------------
        this.mark_field(elem, this.mole);
        this.moleScore++;
        clearTimeout(timerID);
      }, this.level);

      //--------------------------
      //Player acts:
      $(elem).on("click", (event) => {
        clearTimeout(timerID);
        this.mark_field(elem, game.player);
        this.switchClass(
          event.target,
          this.playerFieldClass,
          this.currentFieldClass
        );
        this.playerScore++;
        $(elem).off("click");
      });
      let btnTimerID = setTimeout(() => {
        //--------------------------
        //Post Procedures:
        //Clear listeners&timeOut:
        $(elem).off("click");
        clearTimeout(btnTimerID);
      }, this.level);
    }, this.level);
    $(this.btnPauseSelector).on("click", () => {
      clearInterval(intervalId);
      $(this.interfaceWindowSelector).fadeIn("slow");
    });
  }
  //---------------------------
  //START THE GAME:
  gameGo() {
    
    this.addLevel();
    $(this.btnGoSelector).on("click", this.runGame.bind(this));
  }
};

//======================================================//

//---------------------------
//Create object "game":
const game = new Game(
  "Player",
  "Mole",
  "input-block",
  "game-table__field",
  "field_clear",
  "field_red",
  "field_green",
  "field_black",
  "choice",
  "text-window",
  ".js-go",
  ".js-pause",
  ".js-restart"
);

//---------------------------
//Start the game:
game.gameGo();
