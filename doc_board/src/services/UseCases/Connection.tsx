/* eslint-disable no-unused-vars */
import ConnectionPages from '../Connection/ConnectionPages'

export interface Connection {
  insert(data: any): Promise<string>
  select(identifier: string): Promise<any>
  selectAll(): Promise<any>
  update(identifier: string, data: any): Promise<string>
  remove(identifier: string): void
}
