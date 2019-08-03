function X16VM() {
  this.cpu = new X16VMCPU(this);
}

function X16VMCPU(x16vm) {
  this.vm = x16vm;

  this.program = [];
  this.stack = [];
  this.sp = -1;
  this.ip = 0;

  this.instructionMap = {
    1: this.instructions.PUSH.bind(this),
    2: this.instructions.ADD.bind(this),
    3: this.instructions.SUB.bind(this),
    100: this.instructions.PRINT.bind(this)
  };
}

X16VMCPU.prototype.run = function() {
  this.program = [...inputProgram, 100]; //[1, 10, 1, 6, 2, 3];

  this.ip = 0;
  while (this.ip < this.program.length) {
    this.instructionMap[this.program[this.ip]]();
    this.ip++;
  }

  console.log(this.stack);
};

X16VMCPU.prototype.instructions = {
  PUSH: function() {
    this.stack[++this.sp] = this.program[++this.ip];
  },
  ADD: function() {
    this.stack[this.sp - 1] = this.stack[this.sp - 1] + this.stack[this.sp];
    this.sp--;
  },
  SUB: function() {
    this.stack[this.sp - 1] = this.stack[this.sp - 1] - this.stack[this.sp];
    this.sp--;
  },
  PRINT: function() {
    console.info(
      "%cX16VMCPU\t" + this.stack[this.sp],
      "background: #000; color: #00ffff"
    );
  }
};

var module = module || { exports: {} };

module.exports.X16VMCPU = X16VMCPU;
