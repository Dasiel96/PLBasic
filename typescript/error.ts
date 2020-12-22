// this file holds a bunch of error classes
// anytime any part of the program runs into an issue of some type
// a certain type of error will be returned


// represents a general error in the language
export class Error {
    private name: string
    private error_info: string

    constructor(name: string, info: string){
        this.name = name
        this.error_info = info
    }

    get errorName(): string {
        return this.name
    }

    get details(): string {
        return this.error_info
    }

    toString(): string {
        return `${this.name}: ${this.details}`
    }
}

// represents an error during the lexer process when an unknown character is encountered
export class IllegalCharError extends Error {

    constructor(info: string){
        super("Illegal Char", info)
    }
}