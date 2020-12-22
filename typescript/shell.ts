import { Input } from "./input";
import { Lexer } from "./Interpreter/lexer";

const input = new Input()
const input_text = "basic >> "

function main(text: string) {

    const lexer = new Lexer(text)
    const tokenizer_output = lexer.makeTokens()

    console.log(`${tokenizer_output}`)
    
    input.read(input_text).then((value) => {
        main(value)
    })
}

input.read(input_text).then((value) => {
    main(value)
})