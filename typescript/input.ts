import * as line from 'readline'

// wrapper class for typescript's built in functionality for getting user input
// tried to make it closer to how python gets user input in terms of eas of use
export class Input {

    // used to get input from the player
    private input_reader: line.Interface

    constructor() {
        this.input_reader = line.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    /**
     * opens up a channel for a user to enter text to the program
     *
     * @param   {string}  input_text  text that will be printed out on the screen to prompt the user what to input
     *
     * @return  {Promise<string>}     returns a promise that will allow for code to be run after the user enters input
     */
    read(input_text: string){
        return new Promise<string>((resolve, reject) => {
            this.input_reader.question(input_text, (answer) => {
                resolve(answer)
            })
        })
    }
}