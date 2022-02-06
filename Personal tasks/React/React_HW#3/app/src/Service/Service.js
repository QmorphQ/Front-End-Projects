import { configs } from ".././data/componentsConfig";

class Service {
  //------------------------
  //Properties:
  constructor(configsData) {
    this.configs = configsData;
  }
  //------------------------
  //Methods:
  getConfig = (propName, propValue = "") => {
    return propValue[0] !== '/'
      ? this.configs.find((configObj) => configObj[propName] === propValue)
      : (this.configs.find((configObj) => configObj[propName])[propName])[propValue.slice(1, propValue.length)];
  };
  fetchData = async (url) => {
    return await fetch(url).then((r) => r.json());
  };
  //------------------------
}

export const service = new Service(configs);

