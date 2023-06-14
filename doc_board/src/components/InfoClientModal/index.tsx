import * as Dialog from '@radix-ui/react-dialog'
import {
  Button,
  ButtonDownload,
  CloseButton,
  Content,
  ContentFiles,
  Files,
  Form,
  Input,
  InputWrapper,
  Label,
  Overlay,
  TextButton,
  Title,
  Wrapper,
  WrapperButton,
} from './styles'

import { MdClear } from 'react-icons/md'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { ProposalModel } from '../../services/Models/ProposalModel'
import { FirebaseConnection } from '../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../services/Connection/ConnectionPages'
import { UserParser } from '../../services/Connection/Firebase/Parsers/UserParser'
import { Read } from '../../services/UseCases/Read'
import { UserModel } from '../../services/Models/UserModel'
import { useEffect, useState } from 'react'
import { ProposalParser } from '../../services/Connection/Firebase/Parsers/ProposalParser'
import { Update } from '../../services/UseCases/Update'
import { ProposalStatus } from '../../services/Connection/Firebase/Parsers/ProposalStatus'

interface Props {
  proposal: ProposalModel | null
  isOpen: boolean
  onClose: () => void
}

export function InfoClientModal({ proposal, isOpen, onClose }: Props) {
  const connectionUser = new FirebaseConnection(ConnectionPages.User)
  const connectionProposal = new FirebaseConnection(ConnectionPages.Proposal)

  const userParser = new UserParser()
  const proposalParser = new ProposalParser()

  const select = new Read(connectionUser, userParser)
  const edit = new Update(connectionProposal, proposalParser)

  const getVendorName = async () => {
    if (proposal !== null) {
      const result = await select.this(proposal!.vendorID)
      setVendorName(result.name)
    }
  }

  const approval = async () => {
    if (proposal !== null) {
      await edit.this(proposal!.id.normalize(), {
        name: proposal!.clientName,
        cpf: proposal!.clientCPF,
        phone: proposal!.clientCell,
        bank: proposal!.bankName,
        price: proposal!.proposalValor,
        proposalStatus: ProposalStatus.Typing,
        vendorID: proposal!.vendorID,
      })

      onClose()
    }
  }

  const reproval = async () => {
    if (proposal !== null) {
      await edit.this(proposal!.id.normalize(), {
        name: proposal!.clientName,
        cpf: proposal!.clientCPF,
        phone: proposal!.clientCell,
        bank: proposal!.bankName,
        price: proposal!.proposalValor,
        proposalStatus: ProposalStatus.Refused,
        vendorID: proposal!.vendorID,
      })

      onClose()
    }
  }

  const [vendorName, setVendorName] = useState<String>('')

  getVendorName()

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton onClick={() => onClose()}>
            <MdClear />
          </CloseButton>
          <Title>Nova Proposta</Title>
          <Form>
            <InputWrapper>
              <Wrapper>
                <Label htmlFor="vendedor">Vendedor</Label>
                <Input
                  mask=""
                  id="vendedor"
                  value={vendorName.normalize()}
                  readOnly
                />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="banco">Banco</Label>
                <Input mask="" id="banco" value={proposal?.bankName} readOnly />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper>
                <Label htmlFor="cliente">Cliente</Label>
                <Input
                  mask=""
                  id="cliente"
                  value={proposal?.clientName}
                  readOnly
                />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper>
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  mask="999.999.999-99"
                  id="cpf"
                  placeholder="xxx.xxx.xxx-xx"
                  value={proposal?.clientCPF}
                  readOnly
                />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  mask="(99) 99999-9999"
                  id="telefone"
                  placeholder="(xx) xxxxx-xxxx"
                  value={proposal?.clientCell}
                  readOnly
                />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper style={{ width: '50%' }}>
                <Label htmlFor="valor">Valor</Label>
                <Input
                  mask=""
                  id="valor"
                  placeholder="R$ 15.000,00"
                  value={proposal?.proposalValor}
                  readOnly
                />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper>
                <Label>Anexos</Label>

                <ContentFiles>
                  <Files>arquivo.pdf</Files>

                  <ButtonDownload>
                    <BsFillArrowDownCircleFill />
                  </ButtonDownload>
                </ContentFiles>
              </Wrapper>
            </InputWrapper>

            <WrapperButton>
              <Button onClick={approval} type={'button'}>
                <TextButton>Aprovar</TextButton>
              </Button>

              <Button onClick={reproval} type={'button'}>
                <TextButton>Reprovar</TextButton>
              </Button>
            </WrapperButton>
          </Form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
