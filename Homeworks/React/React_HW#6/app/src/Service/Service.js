export const service = {
    /*
    *getConfig work in pair with componnentsConfig.js (app/data/*componnentsConfig.js) for style-pressets, where "data" = "configs" ("configs" is imported from *componnentsConfig.js)
    */
  getConfig: (data = [], propName, propValue) => {
    let config = data.find((configObj) => configObj[propName] === propValue);
    return config;
  },
};
