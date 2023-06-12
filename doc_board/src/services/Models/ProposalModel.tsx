export class ProposalModel {
  id: String

  vendorID: String

  clientName: String
  clientCPF: String
  clientCell: String

  bankName: String

  proposalValor: String
  proposalStatus: Number

  constructor(
    id: String,
    vendorID: String,
    clientName: String,
    clientCPF: String,
    clientCell: String,
    bankName: String,
    proposalValor: String,
    proposalStatus: Number,
  ) {
    this.id = id

    this.vendorID = vendorID
    this.clientName = clientName
    this.clientCPF = clientCPF
    this.clientCell = clientCell
    this.bankName = bankName
    this.proposalValor = proposalValor
    this.proposalStatus = proposalStatus
  }
}
