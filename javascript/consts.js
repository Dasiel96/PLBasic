"use strict";
// This file holds a bunch of constants that will be used around the program to help eliminate magic values
Object.defineProperty(exports, "__esModule", { value: true });
exports.TT_INT = 'INT';
exports.TT_FLOAT = 'FLOAT';
exports.TT_PLUS = "PLUS";
exports.TT_MINUS = "MINUS";
exports.TT_MUL = "MUL";
exports.TT_DIV = "DIV";
exports.TT_LPAREN = 'LPAREN';
exports.TT_RPAREN = 'RPAREN';
exports.TT_TYPES = new Map();
exports.DIGITS_N_DEC = '0123456789.';
exports.TT_TYPES.set('+', exports.TT_PLUS);
exports.TT_TYPES.set('-', exports.TT_MINUS);
exports.TT_TYPES.set('*', exports.TT_MUL);
exports.TT_TYPES.set('/', exports.TT_DIV);
exports.TT_TYPES.set('(', exports.TT_LPAREN);
exports.TT_TYPES.set(')', exports.TT_RPAREN);
//# sourceMappingURL=consts.js.map