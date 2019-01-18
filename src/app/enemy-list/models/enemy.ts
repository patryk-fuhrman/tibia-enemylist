import { Attributes } from './attributes'

export class Enemy {

    public id: number
    public type: string
    public attributes: Attributes

    constructor(
        id: number,
        type: string,
        attributes: Attributes,
    ) {
        this.id = id
        this.type = type
        this.attributes = Attributes.createInstance(attributes)
    }
}
