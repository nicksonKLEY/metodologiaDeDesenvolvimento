import { ChangeEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

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
} from './styles'

export function ProposalModal() {
  const [fileNames, setFileNames] = useState<string[]>([])

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
        <Title>Nova Proposta</Title>

        <form>
          <input type="text" placeholder="nome" required />
          <input type="text" placeholder="CPF" required />

          <WrapperInput>
            <input type="text" placeholder="Telefone" required />
            <input type="text" placeholder="Valor" required />
          </WrapperInput>

          <input type="text" placeholder="Banco" required />

          <label htmlFor="anexos">
            Anexos <FaPaperclip size={10} color="#1f2843" />
          </label>
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
