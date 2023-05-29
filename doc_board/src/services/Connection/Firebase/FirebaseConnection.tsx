import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { Connection } from "../../UseCases/Connection";
import ConnectionPages from "../ConnectionPages";
import { firebaseDB } from "./firebaseConfiguration";


export class firebaseConnection implements Connection {
    page: ConnectionPages;

    constructor (page: ConnectionPages) {
        this.page = page
    }
    async selectAll(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async select(identifier: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async update(identifier: string, data: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async remove(identifier: string) {
        await deleteDoc(doc(firebaseDB, this.page.valueOf(), identifier))
    }

    async insert(data: any): Promise<string> {
        const docRef = await addDoc(
            collection(firebaseDB, this.page.valueOf()), 
            data
        )
        return docRef.id
    }
}