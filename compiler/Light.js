const LightListener = require("./LightListener").LightListener;
const LightParserClass = require("./LightParser");

var Light = function() {
  //Inherit the default listener
  LightListener.call(this);

  this.bytecode = [1, 2, 3];

  return this;
};

Light.prototype = Object.create(LightListener.prototype);
Light.prototype.constructor = Light;

Light.prototype.enterSource = function(ctx) {
  console.log("Enter source!");
};

module.exports = Light;
