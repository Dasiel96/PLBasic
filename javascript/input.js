"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var line = __importStar(require("readline"));
var Input = /** @class */ (function () {
    function Input() {
        this.input_reader = line.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    Input.prototype.read = function (input_text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.input_reader.question(input_text, function (answer) {
                resolve(answer);
            });
        });
    };
    return Input;
}());
exports.Input = Input;
//# sourceMappingURL=input.js.map