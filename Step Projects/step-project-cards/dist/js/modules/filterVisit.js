"use strict";

import { Modal } from "./Modal.js";
import { Visit } from "./Visit/Visit.js";
import { templates } from "../data/templates.js";


export class Filter {
  constructor () {
    this.filterItem = {
      doctor: '',
      priority: '',
      description: ''
    }
    this.filtersProps = {
      doctor: 'doctor',
      priority: 'priority',
      description: 'description'
    };
  } 
  getData () {
    let form = document.getElementById("priority");
    this.filterItem.priority = form.elements["test"].value;    
     form = document.getElementById("doctor");
    this.filterItem.doctor = form.elements["test"].value;    
    const filterInput = document.getElementById("filterInput");
    this.filterItem.description = filterInput.value;    
  }  
  setFilter = (arr, procedure = () => {console.warn("PROCEDURE")}) => {
    this.getData()
    const entries = Object.entries(this.filterItem)
      .filter(([, value]) => value.length)
      .map(([key, value]) => [this.filtersProps[key], value]) 
      const result = arr.filter(o => 
      entries.every(([key, value]) => value.includes(o[key]))    
    )               
    document.querySelectorAll(".visit").forEach(element => element.remove());
    result.forEach((visit) => 
    new Visit(
      templates.visit[visit.doctor.toLowerCase()],
      visit).render("desk"));
      procedure();
    }
}
