import { ChangeEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'

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
import { MdClear } from 'react-icons/md'

const newProposalSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  cpf: z.string().nonempty('CPF é obrigatório'),
  phone: z.string().nonempty('Telefone é obrigatório'),
  price: z.string(),
  bank: z.string().nonempty('Banco é obrigatório'),
})

type NewProposalFormInput = z.infer<typeof newProposalSchema>

export function ProposalModal() {
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
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <MdClear />
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
            <ButtonSubmit>Cadastrar</ButtonSubmit>
          </ButtonSubmitContainer>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
