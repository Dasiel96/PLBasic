"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../consts");
var error_1 = require("../error");
var token_1 = require("../token");
// takes string input and breaks the input text into tokens
var Lexer = /** @class */ (function () {
    function Lexer(text) {
        this.text = text;
        this.pos = -1;
        this.current_char = null;
        this.advance();
    }
    /**
     * gets the next character within the input text, will set cur char to null if
     * the end of the string has been reached
     */
    Lexer.prototype.advance = function () {
        this.pos++;
        if (this.pos < this.text.length) {
            this.current_char = this.text[this.pos];
        }
        else {
            this.current_char = null;
        }
    };
    /**
     * Tries to generate an array of tokens, if an unknown character is encountered
     * will generate an error instead
     *
     * @return  {Token[] | IllegalCharError}
     */
    Lexer.prototype.makeTokens = function () {
        var tokens = new Array();
        var error = null;
        while (this.current_char) {
            if (' \t'.includes(this.current_char)) {
                this.advance();
            }
            else if (consts_1.TT_TYPES.has(this.current_char)) {
                tokens.push(new token_1.Token(consts_1.TT_TYPES.get(this.current_char)));
                this.advance();
            }
            else if (consts_1.DIGITS_N_DEC.includes(this.current_char)) {
                tokens.push(this.makeNumber());
            }
            else {
                error = new error_1.IllegalCharError(this.current_char + " is not valid");
                break;
            }
        }
        if (error) {
            return error;
        }
        else {
            return tokens;
        }
    };
    /**
     * loops through the input text one character at a time, and generates a string representation of a number
     * which is then converted to an actual number to be stored in a token
     */
    Lexer.prototype.makeNumber = function () {
        var num_str = '';
        var dot_count = 0;
        var token;
        while (this.current_char
            && consts_1.DIGITS_N_DEC.includes(this.current_char)) {
            if (this.current_char === '.') {
                if (dot_count === 1) {
                    break;
                }
                dot_count++;
                if (num_str.length === 0) {
                    num_str = "0" + this.current_char;
                }
                else {
                    num_str += this.current_char;
                }
            }
            else {
                num_str += this.current_char;
            }
            this.advance();
        }
        if (dot_count === 0) {
            token = new token_1.Token(consts_1.TT_INT, parseInt(num_str));
        }
        else {
            token = new token_1.Token(consts_1.TT_FLOAT, parseFloat(num_str));
        }
        return token;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
//# sourceMappingURL=lexer.js.map