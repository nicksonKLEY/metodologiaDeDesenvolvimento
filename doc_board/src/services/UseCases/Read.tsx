import { ModelParser } from '../Models/ModelParser'
import { Connection } from './Connection'

export class Read {
  connection: Connection
  model: ModelParser

  constructor(connection: Connection, model: ModelParser) {
    this.connection = connection
    this.model = model
  }

  async this(identifier: string): Promise<any> {
    const result = await this.connection.select(identifier)
    return this.model.fromConnection(result)
  }

  async all(): Promise<any> {
    const result = await this.connection.selectAll()
    return this.model.fromConnection_(result)
  }
}
