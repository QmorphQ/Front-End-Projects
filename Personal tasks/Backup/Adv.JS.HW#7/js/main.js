//==============
"use strict";//+
//==============

//=========================================
//Import:

import {clock as  clock} from "./clock.js";
import {Card as Card} from "./card.js";
//=========================================

//Pressets:
//--------------
let url = "https://ajax.test-danit.com/api/json";
let target_data = ["users", "posts"];
let method = {
    get: "GET",
    post: "POST",
};
let users;
let posts;
//Partial pressets:
//---------------
let url_1 = url + `/${target_data[0]}`;
let url_2 = url + `/${target_data[1]}`;

//Service functions:
//----------------------
const log = (value) => console.log(value);

//Functins:
//------------------
const insert_text = function (element_selector, text){
    return document.querySelector("." + element_selector).insertAdjacentText("afterbegin", text);
};

//Return response in json format:
//-----------------------------------------------------------------------------------------
const get_jsonDATA = function(method, url) {return fetch(url).then((data) => data.json())};

//Create obj with target properties:
//-------------------------------------------------------
function create_obj (target_obj, ...properties_toCopy) {
    let result_obj = {};
    properties_toCopy.forEach((prop) => {
        return result_obj[prop] = target_obj[prop];
    });
    return result_obj;
};
//--------------------


//--------------
//Clock on page:
clock("clock");
clock.turn_on();


//-----------------
get_jsonDATA(method.get, url_1).then((v) => console.log(v))
get_jsonDATA(method.get, url_2).then((v) => console.log(v))
//================================================================================================//

//--------------
//Get Users list:
get_jsonDATA(method.get, url_1)
.then((e) => users = e.sort((a, b) => a["id"] - b["id"]).map((a) => create_obj (a, "name", "email", "id") ))
.then((e) => console.log(e));

let timerID_1 = setTimeout((event) => {
    console.log(users);
    clearTimeout(timerID_1);
}, 1000)

//----------
//Get posts:
get_jsonDATA(method.get, url_2)
.then((e) => posts = e.map((a) => create_obj (a, "title", "body", "userId", "id")))
.then((e) => (new Card(e[0], users)))
.then((e) => e.create_card("main"))
.then((e) => e)

let timerID_2 = setTimeout((event) => {
    console.log(posts);
    clearTimeout(timerID_2);
}, 1000)


//--------------





