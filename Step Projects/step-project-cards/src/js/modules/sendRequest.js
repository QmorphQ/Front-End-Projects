//===============
"use strict"; //+
//===============

//Pressets:
//URLs:
//--------------------------------------------------------
const url = {
  url:   "https://ajax.test-danit.com/api/v2",
  login: "https://ajax.test-danit.com/api/v2/cards/login",
  cards: "https://ajax.test-danit.com/api/v2/cards",
};

//Request methods:
//--------------------------------------------------------
const method = {
    get:    "GET",
    post:   "POST",
    delete: "DELETE",
    put:    "PUT",
};

//--------------------------------------------------------
//Function:
const send_request = function (url, {
  token:  token = localStorage.token || false,
  method: method,
  body:   body = null,
}) {

  if (method === "POST" || method === "PUT"){
      return fetch(url, {
        method: method,
        body: (method === "POST" || "PUT") ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          'Authorization': `Bearer ${token}`,
          
        },
      })
    } else if (method === "GET" || method === "DELETE"){
      return fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
      })
    }
  }

//--------------------------------------------------------
export { send_request, method, url };