//===============
"use strict"; //+
//===============

//-------------------------------------------------------------------------------
//Import:
import { templates } from "./data/templates.js";
import { Validator, ValidatorArr } from "./modules/validation.js";
import { Modal } from "./modules/Modal.js";
import { createAlertWindow } from "./modules/alert-window.js";
import { send_request, method, url } from "./modules/sendRequest.js";
import {
  autorizationBtn,
  createVisitBtn,
  searchDropDown,
  searchInput,
  sortByPriority,
} from "./modules/DOMelements.js";
import { Visit } from "./modules/Visit/Visit.js";
import { VisitCardiologist } from "./modules/Visit/visits/VisitCardiologist.js";
import { VisitDentist } from "./modules/Visit/visits/VisitDentist.js";
import { VisitTherapist } from "./modules/Visit/visits/VisitTherapist.js";
import { createVisitObserver } from "./modules/observer.js";
import { dragAndDrop } from "./modules/drag&drop.js";
import { LogInForm } from "./modules/logIn-form.js";
import { Filter } from "./modules/filterVisit.js";

//-------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", (event) => {
  //===============================================================================

  //Pressets:
  const alertWindow = createAlertWindow(templates.alertWindow); //Вывод оповещения
  const createVisitTo = {
    Cardiologist: (data) => new VisitCardiologist(data),
    Dentist: (data) => new VisitDentist(data),
    Therapist: (data) => new VisitTherapist(data),
  };
  //Vars:
  //----------------------------------------------------------
  let visitsList = []; //array of cards from server for filter;
  //----------------------------------------------------------

  const logInWindow = new LogInForm();
  const filter = new Filter();


  //Handlers (обработчики событий):
  //===================================================================================================================

  const handlers = {
    //Handler for visit__close-btn to delete via server:
    //---------------------------------------------------------------------------
    deleteVisit: async function handler(event) {
      if (Array.from(event.target.classList).includes("visit__close-btn")) {
        let id = event.target.closest(".visit").getAttribute("data-id");
        await send_request(url.cards + `/${id}`, { method: method.delete })
          .then((r) => {
            if (r.ok)
            {const cardIndex = visitsList.findIndex((element) => {
              return element.id == id;
            });
            visitsList.splice(cardIndex, 1);
            event.target.closest(".visit").remove()
            return r;} else console.warn("Not allowed")
          })
          .catch((error) => console.warn("Not allowed: ",error.message))
      }
    },
    //---------------------------------------------------------------------------

    //Show autorization window (показать окно для ввода логина и пароля):
    //---------------------------------------------------------------------------

    showAutorizationWindow: async function (event) {
      logInWindow.openModal();
      const userData = logInWindow.setUserData();
      const emailInput = userData.emailInput;
      const passwordInput = userData.passwordInput;
      if (localStorage.getItem("userLogin", "userPassword")) {
        emailInput.value = localStorage.getItem("userLogin");
        passwordInput.value = localStorage.getItem("userPassword");
      }

      const signInBtn = document.querySelector(`[data-js="signInBtn"]`);

      signInBtn.addEventListener("click", handlers.login);
    },

    //Sign in (отправка введенных логина и пароля, получение "token"):
    //---------------------------------------------------------------------------
    login: async function (event) {
      event.preventDefault();
      const userData = logInWindow.setUserData();
      const emailInput = userData.emailInput;
      const passwordInput = userData.passwordInput;

      //Validation input values:
      if (document.querySelector(`input[name="email"]:invalid`)) {
        alertWindow("desk", "Here");
        alert("here");
      } else {
        //Get token:
        localStorage.token = await send_request(url.login, {
          method: method.post,
          body: { email: emailInput.value, password: passwordInput.value },
        }).then((response) => {
          try {
            if (response.status !== 200) {
              throw error;
            } else {
              autorizationBtn.classList.add("hide");
              createVisitBtn.classList.remove("hide");
              localStorage.setItem("userPassword", passwordInput.value);
              localStorage.setItem("userLogin", emailInput.value);
              return response.text();
            }
          } catch (error) {
            if (error instanceof ReferenceError) {
              alertWindow(
                "desk",
                "Please, make sure you enter correct login and password!"
              );
            } else {
              alertWindow("desk", "Please, try later!");
              console.log(error.message);
            }
          }
        });

        
        //Get all cards from server:
        await send_request(url.cards, { method: method.get })
          .then((r) => r.json())
          .then((visits) => {
            visitsList = [];
            visits.forEach((visit) => {
              //Создаем базу данных для filter:
              //------------------------------
              visitsList.push(visit);
              //------------------------------

              if (localStorage.getItem("visitsList") === "[]"){
              new Visit(
                templates.visit[visit.doctor.toLowerCase()],
                visit
              ).render("desk", handlers.deleteVisit);
              }
            });
          });
      }
      //DRAG&DROP:
      //------------
      dragAndDrop();
      //------------
    },

    //---------------------------------------------------------------------------

    //Add handler for "create visit" button of Modal Window (добавляем "handler" для создания визита):
    //---------------------------------------------------------------------------
    createVisit: (event) => {
      new Modal("desk").render(async function handler(event) {
        let visitInputsList = Array.from(
          document.querySelectorAll(".create-visit__input")
        );
        let body = {};
        const inputValid = []; //валид
        let flagValid; //валид
        let option = document.querySelector(".create-visit__options");
        body.doctor = option.value;
        visitInputsList.forEach((input) => {
          body[input.name] = input.value;
          let fieldValid; //валид
          fieldValid = new Validator(input); //валид
          let flagFieldValid; //валид
          flagFieldValid = fieldValid.validField(); //валид
          inputValid.push(flagFieldValid); //валид
        });

        const arrFlagFieldValid = new ValidatorArr(inputValid); //валид
        flagValid = arrFlagFieldValid.validFormField(); //валид

        if (flagValid) {
          //валид
          await send_request(url.cards, { method: method.post, body: body })
            .then((res) => res.json())
            .then((res) => {
              document.querySelector(".main__create-visit").remove();
              document.querySelector(".backstage").remove();

              //Create visit:
              createVisitTo[`${res.doctor}`](res).render(
                "desk",
                handlers.deleteVisit
              );
              //Check for new visit on server:
              send_request(url.cards + `/${res.id}`, { method: method.get })
                .then((r) => r.json())
                .then((r) => {
                  visitsList.push(r);
                });
            });

            //Drag&Drop:
            //============
            dragAndDrop();
            //============

        } else {
          console.log("all fields are not filled");
        }
      });
    },

    //Add handler for editting visit (редактирование визита):
    //---------------------------------------------------------------------------
    editVisit: (event) => {
      let target = event.target;
      if (Array.from(target.classList).includes("visit__edit-btn")) {
        let id = target.closest(".visit").getAttribute("data-id");

        //Handler
        async function putHandler(event) {
          let visitInputsList = Array.from(
            document.querySelectorAll(".create-visit__input")
          );
          let body = {};
          const inputValid = []; //валид
          let flagValid; //валид
          body.id = id;
          let option = document.querySelector(".create-visit__options");
          body.doctor = option.value;
          visitInputsList.forEach((input) => {
            body[input.name] = input.value;
            let fieldValid; //валид
            fieldValid = new Validator(input); //валид
            let flagFieldValid; //валид
            flagFieldValid = fieldValid.validField(); //валид
            inputValid.push(flagFieldValid); //валид
          });

          const arrFlagFieldValid = new ValidatorArr(inputValid); //валид
          flagValid = arrFlagFieldValid.validFormField(); //валид

          if (flagValid) {
            //валид
            await send_request(url.cards + `/${id}`, {
              method: method.put,
              body: body,
            })
              .then((r) => r.json())
              .then((r) => {
                document.querySelector(".main__create-visit").remove();
                document.querySelector(".backstage").remove();
                document.querySelector(`.visit[data-id="${id}"]`).remove();
                createVisitTo[`${r.doctor}`](r).render(
                  "desk",
                  handlers.deleteVisit
                );
              });

              //Drag&Drop:
              //============
              dragAndDrop();
              //============

          } else {
            console.log("Заполните все поля");
          }
        }

        let doctor = document
          .querySelector(
            `.visit[data-id="${id}"] .visit__text[data-field="doctor"]`
          )
          .textContent.split(" ")[1];
        //-------------------------
        new Modal("desk").render(putHandler, doctor);
        //-------------------------
        let modalFields = Array.from(
          document.querySelectorAll(`.create-visit .input`)
        );
        //Fill:
        modalFields.forEach((field) => {
          let text = document
            .querySelector(
              `.visit[data-id="${id}"] .visit__text[data-field="${field.name}"]`
            )
            .innerHTML.split(":");
          field.value = text[text.length - 1].slice(5);
        });
      }
    },
  };
  //---------------------------------------------------------------------------
  let visitObserver = createVisitObserver("desk", { childList: true });
  visitObserver(true);

  //===================================================================================================================

 //On load page:
 if (localStorage.getItem("token")){
  let token = localStorage.getItem("token");
  autorizationBtn.classList.add("hide");
  createVisitBtn.classList.remove("hide");
 }

 
 if(localStorage.getItem("visitsList")){
  let visitsData = JSON.parse(localStorage.getItem("visitsList"));
  if (visitsData.length){
  visitsData.forEach((visit) => {visitsList.push(visit)})
  visitsData.forEach((visit) => {
    createVisitTo[`${visit.doctor}`](visit).render(
        "desk",
        handlers.deleteVisit
      );
      
  })
  //DRAG&DROP:
  //------------
  dragAndDrop();
  //------------
 };
 localStorage.removeItem("visitsList");
 
 }
 
  //Add Listeners on DOM elements (вешаем прослушки и соответствующие обработчики для реализации логики функционала приложения):
  searchDropDown.addEventListener("click", (event) => {
     filter.setFilter(visitsList, dragAndDrop);
  }); //Filter Listener
  searchInput.addEventListener("input", () =>
  filter.setFilter(visitsList, dragAndDrop)
  ); //Filter Listener
    sortByPriority.addEventListener("click", () => {
    filter.setFilter(visitsList, dragAndDrop);
  }); //Filter Listener
    autorizationBtn.addEventListener("click", handlers.showAutorizationWindow); //Add event listener on autorization btn;
  createVisitBtn.addEventListener("click", handlers.createVisit); //Create visit (method "POST" && "DELETE");
  document.body.addEventListener("click", handlers.editVisit); //Edit visit (method "PUT");

  //On end session:
  //-------------------------------------------------
  window.onbeforeunload = () => {
    if (visitsList.length)
    localStorage.setItem("visitsList", JSON.stringify(visitsList));
  }
  //-------------------------------------------------
});
