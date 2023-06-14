import { Container, Content, ContainerStatus, Wrapper } from './styles'

import * as Dialog from '@radix-ui/react-dialog'

import { ProposalInformation } from '../../components/ProposalInformation'
import { ProposalModal } from '../../components/ProposalModal'

import { dataSituation } from '../../utils/dataSituation'
import NavSeller from '../../components/NavSeller'

// Connection
import { FirebaseConnection } from '../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../services/Connection/ConnectionPages'
// Model
import { ProposalParser } from '../../services/Connection/Firebase/Parsers/ProposalParser'
// Use cases
import { Read } from '../../services/UseCases/Read'
import { useEffect, useState } from 'react'
import { ProposalModel } from '../../services/Models/ProposalModel'
import { ProposalStatusValue } from '../../services/Connection/Firebase/Parsers/ProposalStatus'

export default function Seller() {
  const [elements, setElements] = useState<ProposalModel[]>([])

  const connection = new FirebaseConnection(ConnectionPages.Proposal)
  const proposalParser = new ProposalParser()

  const select = new Read(connection, proposalParser)

  const reset = async () => {
    fetchData()
  }

  const fetchData = async () => {
    const result = await select.all()
    setElements(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Wrapper>
      <NavSeller />
      <Container>
        <Content>
          <ProposalModal clousure={reset} />

          <ContainerStatus>
            {elements.map((proposal, index) => (
              <ProposalInformation
                key={index}
                name={proposal.clientName}
                bank={proposal.bankName}
                status={ProposalStatusValue.getString(proposal.proposalStatus)}
                situation={ProposalStatusValue.getString(
                  proposal.proposalStatus,
                )}
              />
            ))}
          </ContainerStatus>
        </Content>
      </Container>
    </Wrapper>
  )
}
