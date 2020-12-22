// This file holds a bunch of constants that will be used around the program to help eliminate magic values

export const TT_INT = 'INT'
export const TT_FLOAT = 'FLOAT'
export const TT_PLUS = "PLUS"
export const TT_MINUS = "MINUS"
export const TT_MUL = "MUL"
export const TT_DIV = "DIV"
export const TT_LPAREN = 'LPAREN'
export const TT_RPAREN = 'RPAREN'
export const TT_TYPES = new Map<string, string>()
export const DIGITS_N_DEC = '0123456789.'

TT_TYPES.set('+', TT_PLUS)
TT_TYPES.set('-', TT_MINUS)
TT_TYPES.set('*', TT_MUL)
TT_TYPES.set('/', TT_DIV)
TT_TYPES.set('(', TT_LPAREN)
TT_TYPES.set(')', TT_RPAREN)