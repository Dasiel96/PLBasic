import { DIGITS_N_DEC, TT_FLOAT, TT_INT, TT_TYPES } from "../consts"
import { IllegalCharError } from "../error"
import { Token } from "../token"

// takes string input and breaks the input text into tokens
export class Lexer {

    // text to be turned into tokens
    private text: string

    // character that is used to determine how to process the text to turn into a token
    private current_char: string | null

    // index of the current char
    private pos: number

    constructor(text: string) {
        this.text = text
        this.pos = -1
        this.current_char = null
        this.advance()
    }

    /**
     * gets the next character within the input text, will set cur char to null if
     * the end of the string has been reached
     */
    advance() {
        this.pos++
        if (this.pos < this.text.length) {
            this.current_char = this.text[this.pos]
        }
        else {
            this.current_char = null
        }
    }

    /**
     * Tries to generate an array of tokens, if an unknown character is encountered
     * will generate an error instead
     *
     * @return  {Token[] | IllegalCharError}
     */
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

    /**
     * loops through the input text one character at a time, and generates a string representation of a number
     * which is then converted to an actual number to be stored in a token
     */
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