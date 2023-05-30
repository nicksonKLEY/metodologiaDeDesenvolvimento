import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore'
import { Connection } from '../../UseCases/Connection'
import ConnectionPages from '../ConnectionPages'
import { firebaseDB } from './firebaseConfiguration'

export class FirebaseConnection implements Connection {
  page: ConnectionPages

  constructor(page: ConnectionPages) {
    this.page = page
  }

  update(identifier: string, data: any): Promise<string> {
    throw new Error('Method not implemented.')
  }

  async selectAll(): Promise<any> {
    const query = await getDocs(collection(firebaseDB, this.page.valueOf()))
    return query
  }

  async select(identifier: string): Promise<any> {
    const query = doc(collection(firebaseDB, this.page.valueOf(), identifier))
    return await getDoc(query)
  }

  async remove(identifier: string) {
    await deleteDoc(doc(firebaseDB, this.page.valueOf(), identifier))
  }

  async insert(data: any): Promise<string> {
    const docRef = await addDoc(
      collection(firebaseDB, this.page.valueOf()),
      data,
    )
    return docRef.id
  }
}
