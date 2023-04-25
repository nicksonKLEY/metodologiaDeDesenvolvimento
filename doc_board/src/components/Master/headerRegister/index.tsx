import {
  HeaderList,
  NameUserHeader,
  TextHeader,
  CPFUserHeader,
  AcessLeveluserHeader,
  ActionPainel,
  PasswordUser,
} from './style'
export default function HeaderRegister() {
  return (
    <HeaderList>
      <NameUserHeader>
        <TextHeader>NOME</TextHeader>
      </NameUserHeader>

      <CPFUserHeader>
        <TextHeader>CPF</TextHeader>
      </CPFUserHeader>

      <AcessLeveluserHeader>
        <TextHeader>NÍVEL DE ACESSO</TextHeader>
      </AcessLeveluserHeader>

      <PasswordUser>
        <TextHeader>SENHA</TextHeader>
      </PasswordUser>

      <ActionPainel>
        <TextHeader>AÇÃO</TextHeader>
      </ActionPainel>
    </HeaderList>
  )
}
