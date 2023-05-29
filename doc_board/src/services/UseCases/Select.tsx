import { ModelParser } from "../Models/ModelParser"
import { Connection } from "./Connection"

export class Select {
    connection: Connection
    model: ModelParser
     
    constructor (connection: Connection, model: ModelParser) {
        this.connection = connection
        this.model = model
    }

    async this(identifier: string): Promise<string>{
        return this.connection.select(
            identifier
        )
    }

    async all(): Promise<string> {
        return this.connection.selectAll()
    }
}