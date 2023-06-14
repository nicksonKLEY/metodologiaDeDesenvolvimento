export class ProposalModel {
  id: String

  vendorID: string

  clientName: string
  clientCPF: string
  clientCell: string

  bankName: string

  proposalValor: string
  proposalStatus: Number

  constructor(
    id: string,
    vendorID: string,
    clientName: string,
    clientCPF: string,
    clientCell: string,
    bankName: string,
    proposalValor: string,
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
