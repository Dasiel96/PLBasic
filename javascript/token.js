"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token = /** @class */ (function () {
    function Token(type_, value_) {
        if (value_ === void 0) { value_ = null; }
        this.type_ = type_;
        this.value_ = value_;
    }
    Object.defineProperty(Token.prototype, "type", {
        get: function () {
            return this.type_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "value", {
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