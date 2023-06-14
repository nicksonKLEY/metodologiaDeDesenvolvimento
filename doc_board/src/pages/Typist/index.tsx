import { useEffect, useState } from 'react'

import {
  ContainerMain,
  AnalizedElement,
  FieldClient,
  FieldBank,
  FieldStatus,
} from './styles'

import TypistContainer from '../../components/Typist/ContainerTypist'
import { InfoClientModal } from '../../components/InfoClientModal'
import { ProposalModel } from '../../services/Models/ProposalModel'
import { FirebaseConnection } from '../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../services/Connection/ConnectionPages'
import { ProposalParser } from '../../services/Connection/Firebase/Parsers/ProposalParser'
import { Read } from '../../services/UseCases/Read'
import { ProposalStatusValue } from '../../services/Connection/Firebase/Parsers/ProposalStatus'

export default function Typist() {
  const [modal, setModal] = useState(false)
  const [proposal, setProposal] = useState<ProposalModel | null>(null)
  const [elements, setElements] = useState<ProposalModel[]>([])

  function modalOPen(proposal: ProposalModel) {
    setModal(!modal)
    setProposal(proposal)
  }

  const connection = new FirebaseConnection(ConnectionPages.Proposal)
  const proposalParser = new ProposalParser()
  const select = new Read(connection, proposalParser)

  const reset = async () => {
    setModal(!modal)
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
    <ContainerMain>
      <InfoClientModal
        proposal={proposal}
        isOpen={modal}
        onClose={() => reset()}
      />

      <TypistContainer>
        {elements
          // eslint-disable-next-line array-callback-return
          .filter((item) => {
            if (
              ProposalStatusValue.getString(item.proposalStatus) ===
                'waiting' ||
              ProposalStatusValue.getString(item.proposalStatus) === 'pending'
            ) {
              return item
            }
          })
          .map((item, index) => (
            <AnalizedElement
              key={index}
              style={{
                color:
                  ProposalStatusValue.getString(item.proposalStatus) !==
                  'waiting'
                    ? '#F1C889'
                    : '#fff',
              }}
              onClick={() => modalOPen(item)}
            >
              <FieldClient>{item.clientName} </FieldClient>{' '}
              <FieldBank> {item.bankName}</FieldBank>{' '}
              <FieldStatus>
                {ProposalStatusValue.getString(item.proposalStatus)}
              </FieldStatus>
            </AnalizedElement>
          ))}
      </TypistContainer>
    </ContainerMain>
  )
}
