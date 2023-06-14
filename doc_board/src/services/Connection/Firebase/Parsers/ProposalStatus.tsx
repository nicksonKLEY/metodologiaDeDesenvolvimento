enum ProposalStatus {
  // eslint-disable-next-line prettier/prettier
  Waiting = 0,
  Pending = 1,
  Typing = 2,
  Refused = 9,
}

class ProposalStatusValue {
  static getString(
    value: Number,
  ): 'waiting' | 'pending' | 'typing' | 'refused' {
    switch (value) {
      case 0:
        return 'waiting'
      case 1:
        return 'pending'
      case 2:
        return 'typing'
      case 9:
        return 'refused'
      default:
        return 'waiting'
    }
  }
}

export { ProposalStatus, ProposalStatusValue }
