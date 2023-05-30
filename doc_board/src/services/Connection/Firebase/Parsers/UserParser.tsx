import {
  DocumentData,
  DocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore'
import { ModelParser } from '../../../Models/ModelParser'
import { UserModel } from '../../../Models/UserModel'

const FirestoreConverter = {
  converter(identifier: string, data: any): UserModel {
    return new UserModel(
      identifier,
      data.name,
      data.cpf,
      data.password,
      data.acessLevel,
    )
  },
}

export class UserParser implements ModelParser {
  fromConnection_(models: QuerySnapshot<DocumentData>): UserModel[] {
    return models.docs.map((value) => {
      return FirestoreConverter.converter(value.id, value.data())
    })
  }

  fromConnection(model: DocumentSnapshot<DocumentData>): UserModel {
    return FirestoreConverter.converter(model.id, model.data())
  }

  toConnection(model: UserModel) {
    return {
      name: model.name,
      cpf: model.cpf,
      password: model.password,
      acessLevel: model.acessLevel,
    }
  }
}
