"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// represents the smallest atomic part of a piece of code
var Token = /** @class */ (function () {
    function Token(type, value) {
        this.type_ = type;
        this.value_ = value;
    }
    Object.defineProperty(Token.prototype, "type", {
        /**
         * gives the type of the data a token represents
         */
        get: function () {
            return this.type_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "value", {
        /**
         * returns the data stored in a token
         * (currently can only hold a number if any data is given to a token)
         */
        get: function () {
            return this.value_;
        },
        enumerable: true,
        configurable: true
    });
    Token.prototype.toString = function () {
        var output = "" + this.type_;
        if (this.value_) {
            output = this.type_ + ":" + this.value_;
        }
        return output;
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=token.js.map