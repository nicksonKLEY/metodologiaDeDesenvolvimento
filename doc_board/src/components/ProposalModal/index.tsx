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
} from './styles'

const newProposalSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  phone: z.number(),
  price: z.number(),
  bank: z.string(),
})

type NewProposalFormInput = z.infer<typeof newProposalSchema>

export function ProposalModal() {
  const [fileNames, setFileNames] = useState<string[]>([])

  const { register } = useForm<NewProposalFormInput>({
    resolver: zodResolver(newProposalSchema),
  })

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newFileNames = Array.from(files).map((file) => file.name)
      setFileNames([...fileNames, ...newFileNames])
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <AiOutlineCloseCircle size={30} color="#141939" />
        </CloseButton>

        <Title>Nova Proposta</Title>

        <form>
          <input
            type="text"
            placeholder="Nome"
            required
            {...register('name')}
          />
          <input type="text" placeholder="CPF" required {...register('cpf')} />

          <WrapperInput>
            <input
              type="text"
              placeholder="Telefone"
              required
              {...register('phone')}
            />
            <input
              type="text"
              placeholder="Valor"
              required
              {...register('price')}
            />
          </WrapperInput>

          <input
            type="text"
            placeholder="Banco"
            required
            {...register('bank')}
          />

          <AttachmentLabel htmlFor="anexos">
            Anexos <FaPaperclip size={10} color="#1f2843" />
          </AttachmentLabel>
          <AttachmentsInput
            id="anexos"
            type="file"
            required
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
