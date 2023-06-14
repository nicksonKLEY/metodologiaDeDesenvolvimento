import { ChangeEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'

import { AiOutlineCloseCircle } from 'react-icons/ai'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FaPaperclip } from 'react-icons/fa'

import {
  ButtonSubmit,
  Content,
  Overlay,
  Title,
  WrapperInput,
  ButtonSubmitContainer,
  AttachmentsInput,
  PdfList,
  CloseButton,
  AttachmentLabel,
  ErrorMessage,
} from './styles'
import { ProposalParser } from '../../services/Connection/Firebase/Parsers/ProposalParser'
import { FirebaseConnection } from '../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../services/Connection/ConnectionPages'
import { Insert } from '../../services/UseCases/Insert'
import { ProposalModel } from '../../services/Models/ProposalModel'

const newProposalSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  cpf: z.string().nonempty('CPF é obrigatório'),
  phone: z.string().nonempty('Telefone é obrigatório'),
  price: z.string(),
  bank: z.string().nonempty('Banco é obrigatório'),
})

type NewProposalFormInput = z.infer<typeof newProposalSchema>

export function ProposalModal() {
  const userParser = new ProposalParser()
  const connection = new FirebaseConnection(ConnectionPages.Proposal)
  const insert = new Insert(connection, userParser)

  const [fileNames, setFileNames] = useState<string[]>([])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewProposalFormInput>({
    resolver: zodResolver(newProposalSchema),
  })

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newFileNames = Array.from(files).map((file) => file.name)
      setFileNames([...fileNames, ...newFileNames])
    }
  }

  function handleNewProposal(data: NewProposalFormInput) {
    const newData: any = data

    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser)
      newData.vendorID = user.id

      insert.this(data)
    }
    console.log(loggedInUser)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <AiOutlineCloseCircle size={30} color="#141939" />
        </CloseButton>

        <Title>Nova Proposta</Title>

        <form onSubmit={handleSubmit(handleNewProposal)}>
          <input type="text" placeholder="Nome" {...register('name')} />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <input type="text" placeholder="CPF" {...register('cpf')} />

          <WrapperInput>
            <div>
              <input
                type="text"
                placeholder="Telefone"
                {...register('phone')}
              />

              {errors.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}
            </div>

            <div>
              <input type="text" placeholder="Valor" {...register('price')} />
            </div>
          </WrapperInput>

          <input type="text" placeholder="Banco" {...register('bank')} />

          <AttachmentLabel htmlFor="anexos">
            Anexos <FaPaperclip size={13} color="#1f2843" />
          </AttachmentLabel>
          <AttachmentsInput
            id="anexos"
            type="file"
            onChange={handleFileChange}
            multiple
          />

          {fileNames.length > 0 && (
            <PdfList className="file-names">
              {fileNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </PdfList>
          )}

          <ButtonSubmitContainer>
            <ButtonSubmit>Gravar</ButtonSubmit>
          </ButtonSubmitContainer>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
