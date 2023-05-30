/* eslint-disable no-unused-vars */
import { FormProps } from 'react-router-dom'
import { ModelParser } from '../Models/ModelParser'
import { Connection } from './Connection'

export class Delete {
  connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  async this(identifier: string) {
    this.connection.remove(identifier)
  }
}
