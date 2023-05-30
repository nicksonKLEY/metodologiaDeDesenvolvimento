export interface Connection {
  insert(data: any): Promise<string>
  select(identifier: string): Promise<any>
  selectAll(): Promise<any>
  update(identifier: string, data: any): void
  remove(identifier: string): void
}
