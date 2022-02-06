export class LocalStorageService {
  //--------------------------------------------
  //Prressets:
  //--------------------------------------------

  //Methods:
  //++++++++++++++++++++++++
  checkStorage() {
    return localStorage;
  }
  //++++++++++++++++++++++++
  getData(prop) {
    return this.formatData(localStorage.getItem(prop), "js-data");
  }
  //++++++++++++++++++++++++

  setData(prop, data) {
    data = this.formatData(data);
    return localStorage.setItem(prop, data);
  }
  //++++++++++++++++++++++++

  formatData(data, format = "string") {
    return format === "string" ? JSON.stringify(data) : JSON.parse(data);
  }
  //++++++++++++++++++++++++

  clear() {
    return localStorage.clear();
  }
  //++++++++++++++++++++++++

  addNewItemInSection(section, item) {
    if (!localStorage[section]) {
      return this.setData(section, [item]);
    } else if (!Array.isArray(this.getData(section))) {
      console.warn(
        `%c Wrong type of data in section. Use this method for "array" type of data stored in section: ${section}, or use "setData" method to set "primitive" type.`,
        `background: orange; color: blue;`
      );
      return;
    } else {
      let data = this.getData(section);
      data.push(item);
      return this.setData(section, data);
    }
  }
  //++++++++++++++++++++++++
  removeItemFromSection(section, key, subKey, keyValue) {
    let data = this.getData(section).filter((item) => item[key][subKey] !== keyValue);
    this.setData(section, data);
    if (this.getData(section).length === 0){
     return localStorage.removeItem(section)
    }
  }
  //++++++++++++++++++++++++
  getItemFromSection(section, key, subKey ,keyValue) {
    if (this.getData(section)) {
      return this.getData(section).find((item) => 
        item[key][subKey] === keyValue
      );
    }
  }
  //--------------------------------------------
}

export const storage = new LocalStorageService();
