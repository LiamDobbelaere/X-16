const antlr4 = require("antlr4");
const LightLexer = require("./LightLexer");
const LightParser = require("./LightParser");
const Light = require("./Light");
const fs = require("fs");
const path = require("path");
//const watchdir = './examples';
//const minify = false;

compile(process.argv[2]);

function compile(filePath) {
  console.log("Compiling " + filePath);

  var input = fs.readFileSync(filePath, "utf8");
  var chars = new antlr4.InputStream(input);
  var lexer = new LightLexer.LightLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new LightParser.LightParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.source();

  var treeListener = new Light();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);

  fs.writeFileSync(
    filePath + ".bin.js",
    "var inputProgram = " + "[" + treeListener.bytecode + "]"
  );
}
