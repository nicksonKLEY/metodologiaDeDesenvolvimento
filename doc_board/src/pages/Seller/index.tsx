import { Container, Content, ContainerStatus } from './styles'

import * as Dialog from '@radix-ui/react-dialog'

import { ProposalInformation } from '../../components/ProposalInformation'
import { ProposalModal } from '../../components/ProposalModal'

export default function Seller() {
  return (
    <>
      <Container>
        <Content>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Inserir Proposta</button>
            </Dialog.Trigger>

            <ProposalModal />
          </Dialog.Root>

          <ContainerStatus>
            <ProposalInformation
              name="Raimundo Nonato"
              bank="Daycoval"
              status="Aguardando digitação"
              situation="waiting"
            />
            <ProposalInformation
              name="Maria do Perpetuo"
              bank="Pan"
              status="Documento pendente"
              situation="pending"
            />
            <ProposalInformation
              name="Maria do Perpetuo"
              bank="Safra"
              status="Proposta Digitada"
              situation="typing"
            />
            <ProposalInformation
              name="Terezinha Bentes"
              bank="BMC"
              status="Proposta Recusada"
              situation="refused"
            />
          </ContainerStatus>
        </Content>
      </Container>
    </>
  )
}
