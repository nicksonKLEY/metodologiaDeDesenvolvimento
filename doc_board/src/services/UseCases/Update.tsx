import { FormProps } from 'react-router-dom'
import { ModelParser } from '../Models/ModelParser'
import { Connection } from '../Connection/Connection'

export class Update {
  connection: Connection
  model: ModelParser

  constructor(connection: Connection, model: ModelParser) {
    this.connection = connection
    this.model = model
  }

  async this(identifier: string, form: FormProps) {
    this.connection.update(identifier, this.model.toConnection(form))
  }
}
