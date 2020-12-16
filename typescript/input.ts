import * as line from 'readline'

export class Input {
    private input_reader

    constructor() {
        this.input_reader = line.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    read(input_text: string){
        return new Promise<string>((resolve, reject) => {
            this.input_reader.question(input_text, (answer) => {
                resolve(answer)
            })
        })
    }
}