export class Attributes {

    // tslint:disable-next-line:variable-name
    public created_at: string
    public level: number
    public name: string
    public payment: string
    public reason: string
    // tslint:disable-next-line:variable-name
    public resource_type: string
    public vocation: number

    public static createInstance(input: any): Attributes {
        const self: Attributes = new Attributes()

        for (const prop in input) {
            self[prop] = input[prop]
        }

        return self
    }
}
