"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Error = /** @class */ (function () {
    function Error(name, info) {
        this.name = name;
        this.error_info = info;
    }
    Object.defineProperty(Error.prototype, "errorName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Error.prototype, "details", {
        get: function () {
            return this.error_info;
        },
        enumerable: true,
        configurable: true
    });
    Error.prototype.toString = function () {
        return this.name + ": " + this.details;
    };
    return Error;
}());
exports.Error = Error;
var IllegalCharError = /** @class */ (function (_super) {
    __extends(IllegalCharError, _super);
    function IllegalCharError(info) {
        return _super.call(this, "Illegal Char", info) || this;
    }
    return IllegalCharError;
}(Error));
exports.IllegalCharError = IllegalCharError;
//# sourceMappingURL=error.js.map