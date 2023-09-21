const uuid = require("uuid");

function generateGUID() {    
    return uuid.v4();
  }

module.exports = generateGUID;