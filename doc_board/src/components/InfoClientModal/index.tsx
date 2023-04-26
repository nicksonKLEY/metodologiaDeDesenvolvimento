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

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function InfoClientModal({ isOpen, onClose }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton onClick={() => onClose()}>
            <MdClear />
          </CloseButton>
          <Title>Nova Digitação</Title>
          <Form>
            <InputWrapper>
              <Wrapper>
                <Label htmlFor="vendedor">Vendedor</Label>
                <Input id="vendedor" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="banco">Banco</Label>
                <Input id="banco" />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper>
                <Label htmlFor="cliente">Cliente</Label>
                <Input id="cliente" />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper>
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" placeholder="xxx.xxx.xxx-xx" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="(xx) xxxxx-xxxx" />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper style={{ width: '50%' }}>
                <Label htmlFor="valor">Valor</Label>
                <Input id="valor" placeholder="R$ 15.000,00" />
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
              <Button>
                <TextButton>Aprovar</TextButton>
              </Button>
              <Button>
                <TextButton>Pendenciar</TextButton>
              </Button>
              <Button>
                <TextButton>Cancelar</TextButton>
              </Button>
            </WrapperButton>
          </Form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
