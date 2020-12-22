
// represents the smallest atomic part of a piece of code
export class Token {

    private type_: string
    private value_?: number

    constructor(type: string, value?: number) {
        this.type_ = type
        this.value_ = value
    }

    /**
     * gives the type of the data a token represents
     */
    get type(): string {
        return this.type_
    }

    /**
     * returns the data stored in a token
     * (currently can only hold a number if any data is given to a token)
     */
    get value(): number | undefined {
        return this.value_
    }

    toString(): string {
        let output = `${this.type_}`
        if (this.value_) {
            output = `${this.type_}:${this.value_}`
        }
        return output
    }
}