import { Container } from './styles'

interface Props {
  name: string
  bank: string
  status: string
  situation: 'waiting' | 'pending' | 'typing' | 'refused'
}

export function ProposalInformation({ situation, name, bank, status }: Props) {
  return (
    <Container type={situation}>
      <p>{name}</p>
      <p>{bank}</p>
      <span>{status}</span>
    </Container>
  )
}
