import { Container, Content, ContainerStatus, Wrapper } from './styles'

import * as Dialog from '@radix-ui/react-dialog'

import { ProposalInformation } from '../../components/ProposalInformation'
import { ProposalModal } from '../../components/ProposalModal'

import { dataSituation } from '../../utils/dataSituation'
import NavSeller from '../../components/NavSeller'

export default function Seller() {
  return (
    <Wrapper>
      <NavSeller />
      <Container>
        <Content>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Inserir Proposta</button>
            </Dialog.Trigger>

            <ProposalModal />
          </Dialog.Root>

          <ContainerStatus>
            {dataSituation.map((proposal) => (
              <ProposalInformation
                key={proposal.id}
                name={proposal.name}
                bank={proposal.bank}
                status={proposal.status}
                situation={proposal.situation}
              />
            ))}
          </ContainerStatus>
        </Content>
      </Container>
    </Wrapper>
  )
}
