import { FormProps } from "react-router-dom"
import { ModelParser } from "../Models/ModelParser"
import { Connection } from "./Connection"

export class Insert {
    connection: Connection
    model: ModelParser
     
    constructor (connection: Connection, model: ModelParser) {
        this.connection = connection
        this.model = model
    }

    async this(form: FormProps): Promise<string>{
        return this.connection.insert(
            this.model.toConnection(form)
        )
    }
}