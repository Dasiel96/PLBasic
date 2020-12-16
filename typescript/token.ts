export class Token {

    constructor(private type_: string, private value_: number|null=null) {}

    get type(): string {
        return this.type_
    }

    get value(): number | null {
        return this.value_
    }

    toString() {
        let output = `${this.type_}`
        if (this.value_) {
            output = `${this.type_}:${this.value_}`
        }
        return output
    }
}