import ConnectionPages from "../Connection/ConnectionPages"

export interface Connection {
    insert(data: any): Promise<string>
    select(identifier: string): Promise<string>
    selectAll(): Promise<string>
    update(identifier: string, data: any): Promise<string>
    remove(identifier: string): void
}