import { DIGITS_N_DEC, TT_FLOAT, TT_INT, TT_TYPES } from "./consts"
import { IllegalCharError } from "./error"
import { Token } from "./token"

export class Lexer {
    private text: string
    private current_char: string | null
    private pos: number

    constructor(text: string) {
        this.text = text
        this.pos = -1
        this.current_char = null
        this.advance()
    }

    advance() {
        this.pos++
        if (this.pos < this.text.length) {
            this.current_char = this.text[this.pos]
        }
        else {
            this.current_char = null
        }
    }

    makeTokens() {
        const tokens = new Array<Token>()
        let error: IllegalCharError | null = null

        while (this.current_char) {
            if (' \t'.includes(this.current_char)) {
                this.advance()
            }
            else if (TT_TYPES.has(this.current_char)) {
                tokens.push(new Token(TT_TYPES.get(this.current_char)!!))
                this.advance()
            }
            else if (DIGITS_N_DEC.includes(this.current_char)) {
                tokens.push(this.makeNumber())
            }
            else {
                error = new IllegalCharError(`${this.current_char} is not valid`)
                break
            }

        }

        if (error) {
            return error
        }
        else {
            return tokens
        }
    }

    private makeNumber() {
        let num_str = ''
        let dot_count = 0
        let token: Token

        while (
            this.current_char
            && DIGITS_N_DEC.includes(this.current_char)
        ) {
            if (this.current_char === '.') {
                if (dot_count === 1) {
                    break
                }
                dot_count++

                if (num_str.length === 0) {
                    num_str = `0${this.current_char}`
                }
                else {
                    num_str += this.current_char
                }
            }
            else {
                num_str += this.current_char
            }
            this.advance()
        }

        if (dot_count === 0) {
            token = new Token(TT_INT, parseInt(num_str))
        }
        else {
            token = new Token(TT_FLOAT, parseFloat(num_str))
        }

        return token
    }
}