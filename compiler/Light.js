const LightListener = require("./LightListener").LightListener;
const LightParser = require("./LightParser").LightParser;
const X16VMCPU = require("../x16vm").X16VMCPU;
const cpu = new X16VMCPU();

function i2b(instruction, ...operands) {
  const opcode = Object.keys(cpu.instructionMap).find(opcode => {
    const func = cpu.instructionMap[opcode];

    if (func.name.split(" ")[1] === instruction.name) {
      return opcode;
    }
  });

  return [opcode, ...operands];
}

var Light = function() {
  //Inherit the default listener
  LightListener.call(this);

  this.bytecode = [];
  this.sp = 0; //Stack pointer
  this.varmap = {}; //Maps variables to stack locations

  return this;
};

Light.prototype = Object.create(LightListener.prototype);
Light.prototype.constructor = Light;

Light.prototype.enterSource = function(ctx) {};
Light.prototype.exitSource = function(ctx) {
  console.log(this.varmap);
};

Light.prototype.exitAdditiveExpression = function(ctx) {
  const inst = ctx.add() ? cpu.instructions.ADD : cpu.instructions.SUB;
  this.bytecode.push(...i2b(inst));
};

Light.prototype.exitLiteralExpression = function(ctx) {
  this.bytecode.push(...i2b(cpu.instructions.PUSH, parseInt(ctx.getText())));
};

Light.prototype.enterVariableDeclaration = function(ctx) {};

Light.prototype.exitVariableDeclaration = function(ctx) {
  //The stack should be pointing at the value of the variable at this point
  this.varmap[ctx.Identifier().getText()] = this.sp;
};

module.exports = Light;
