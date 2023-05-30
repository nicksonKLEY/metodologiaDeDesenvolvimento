import { FormProps } from "react-router-dom"
import { ModelParser } from "../Models/ModelParser"
import { Connection } from "../Connection/Connection"

export class Delete {
    connection: Connection
     
    constructor (connection: Connection) {
        this.connection = connection
    }

    async this(identifier: string){
        this.connection.remove(
            identifier
        )
    }
}