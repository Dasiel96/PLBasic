"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var lexer_1 = require("./Interpreter/lexer");
var input = new input_1.Input();
var input_text = "basic >> ";
function main(text) {
    var lexer = new lexer_1.Lexer(text);
    var tokenizer_output = lexer.makeTokens();
    console.log("" + tokenizer_output);
    input.read(input_text).then(function (value) {
        main(value);
    });
}
input.read(input_text).then(function (value) {
    main(value);
});
//# sourceMappingURL=shell.js.map