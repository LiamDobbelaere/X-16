function X16VM() {
  this.cpu = new X16VMCPU(this);
}

function X16VMCPU(x16vm) {
  this.vm = x16vm;

  this.program = [];
  this.stack = [];
  this.sp = -1;
  this.ip = 0;
  this.lastTick = new Date();

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
  this.lastTick = window.performance.now();
  this.updateStackVis();
  this.updateInstructionVis();

  window.requestAnimationFrame(this.tick.bind(this));
};

X16VMCPU.prototype.tick = function() {
  window.requestAnimationFrame(this.tick.bind(this));

  if (
    this.ip < this.program.length &&
    window.performance.now() - this.lastTick > 1000
  ) {
    this.instructionMap[this.program[this.ip]]();
    this.ip++;
    this.lastTick = window.performance.now();
    this.updateStackVis();
    this.updateInstructionVis();
  }
};

X16VMCPU.prototype.updateStackVis = function() {
  var stack = document.getElementById("stack-vis");
  stack.innerHTML = "";
  this.stack.forEach((s, i) => {
    if (i == this.sp) {
      stack.innerHTML += "<li class='sp'>" + s + "</li>";
    } else {
      stack.innerHTML += "<li>" + s + "</li>";
    }
  });
};

X16VMCPU.prototype.updateInstructionVis = function() {
  var instr = document.getElementById("instruction-vis");
  instr.innerHTML = "";
  this.program.forEach((ins, i) => {
    if (i == this.ip) {
      instr.innerHTML +=
        "<li class='ip'>" +
        ins +
        " " +
        (this.instructionMap[ins].name.split(" ")[1] || "") +
        "</li>";
    } else {
      instr.innerHTML += "<li>" + ins + "</li>";
    }
  });
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
