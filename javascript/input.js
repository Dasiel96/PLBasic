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
// wrapper class for typescript's built in functionality for getting user input
// tried to make it closer to how python gets user input in terms of eas of use
var Input = /** @class */ (function () {
    function Input() {
        this.input_reader = line.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    /**
     * opens up a channel for a user to enter text to the program
     *
     * @param   {string}  input_text  text that will be printed out on the screen to prompt the user what to input
     *
     * @return  {Promise<string>}     returns a promise that will allow for code to be run after the user enters input
     */
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