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

    toString() {
        return `${this.name}: ${this.details}`
    }
}

export class IllegalCharError extends Error {

    constructor(info: string){
        super("Illegal Char", info)
    }
}