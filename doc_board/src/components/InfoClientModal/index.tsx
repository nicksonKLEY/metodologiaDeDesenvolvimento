import * as Dialog from '@radix-ui/react-dialog'
import {
  Button,
  ButtonDownload,
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

interface Props {
  isopen: boolean
}

export function InfoClientModal({ isopen }: Props) {
  return (
    <Dialog.Root open={isopen}>
      <Dialog.Portal>
        <Overlay />

        <Content>
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
                <Input id="cpf" />
              </Wrapper>

              <Wrapper>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper style={{ width: '50%' }}>
                <Label htmlFor="valor">Valor</Label>
                <Input id="valor" />
              </Wrapper>
            </InputWrapper>

            <InputWrapper>
              <Wrapper>
                <Label>Anexos</Label>

                <ContentFiles>
                  <Files>arquivo.pdf</Files>

                  <ButtonDownload />
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
