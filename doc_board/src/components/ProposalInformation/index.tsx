import { Container, Bank } from './styles'

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
      <Bank>{bank}</Bank>
      <span>{status}</span>
    </Container>
  )
}
