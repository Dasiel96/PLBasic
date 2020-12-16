"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var error_1 = require("./error");
var token_1 = require("./token");
var Lexer = /** @class */ (function () {
    function Lexer(text) {
        this.text = text;
        this.pos = -1;
        this.current_char = null;
        this.advance();
    }
    Lexer.prototype.advance = function () {
        this.pos++;
        if (this.pos < this.text.length) {
            this.current_char = this.text[this.pos];
        }
        else {
            this.current_char = null;
        }
    };
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