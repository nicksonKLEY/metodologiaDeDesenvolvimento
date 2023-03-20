import { ProposalInformation } from '../../components/ProposalInformation'
import Sidbar from '../../components/Sidebar'
import { Container, Content, ContainerStatus } from './styles'
import { ProposalModal } from '../../components/ProposalModal'

import * as Dialog from '@radix-ui/react-dialog'

export default function Seller() {
  return (
    <>
      <Sidbar />

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
              name="João Bezerra"
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
