import {
  DocumentData,
  DocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore'
import { ModelParser } from '../../../Models/ModelParser'
import { ProposalModel } from '../../../Models/ProposalModel'
import { ProposalStatus } from './ProposalStatus'

const FirestoreConverter = {
  converter(identifier: string, data: any): ProposalModel {
    return new ProposalModel(
      identifier,
      data.vendorID,
      data.clientName,
      data.clientCPF,
      data.clientCell,
      data.bankName,
      data.proposalValor,
      data.proposalStatus,
    )
  },
}

export class ProposalParser implements ModelParser {
  fromConnection_(models: QuerySnapshot<DocumentData>): ProposalModel[] {
    return models.docs.map((value) => {
      return FirestoreConverter.converter(value.id, value.data())
    })
  }

  fromConnection(model: DocumentSnapshot<DocumentData>): ProposalModel {
    return FirestoreConverter.converter(model.id, model.data())
  }

  toConnection(model: any) {
    return {
      clientName: model.name,
      clientCPF: model.cpf,
      clientCell: model.phone,
      bankName: model.bank,
      proposalValor: model.price,
      proposalStatus:
        model.proposalStatus === null
          ? ProposalStatus.Waiting
          : model.proposalStatus,
      vendorID: model.vendorID,
    }
  }
}
