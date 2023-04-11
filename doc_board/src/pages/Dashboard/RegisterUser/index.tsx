import { useState, ChangeEvent, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  ViewList,
  BtnRegister,
  ContainerList,
  ContainerMain,
  ContainerContent,
  Container,
  ListContain,
  HeaderList,
  NameUserHeader,
  CPFUserHeader,
  AcessLeveluserHeader,
  PasswordUser,
  ActionPainel,
  TextHeader,
  ViewInput,
  Input,
  MsgError,
  ContentInfos,
  FieldName,
  FieldCPf,
  FieldAcessLevel,
  FieldPassword,
  FieldActionPainel,
  FieldData,
  BtnAction,
  ColorIconAction,
} from './style'
import { mask } from '../../../components/masks/cpf'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import NavMaster from '../../../components/NavMaster'
import Modal from '../../../components/Modal/Modal'

type CreateEmployeesData = {
  id: number
  nome: string
  cpf: string
  senha: string
  acessLevel: string
}

const createEmployeeSchema = yup.object().shape({
  id: yup.number(),
  nome: yup
    .string()
    .required('Nome é obrigatório')
    .min(6, 'Nome deve ter no mino 6 caracteres'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .max(14, 'O CPF deve conter 11 digitos'),
  senha: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  acessLevel: yup.string().required('Nivel de Acesso é obrigatório'),
})

export default function RegisterEmployee() {
  const [nameEmployee, setNome] = useState('')
  const [cpfEmployee, setCpf] = useState('')
  const [acessLevelEmployee, setAcessLevel] = useState('')
  const [password, setPassword] = useState('')
  const [elements, setElements] = useState<CreateEmployeesData[]>([])

  const handleInputChangeCPf = (event: ChangeEvent<HTMLInputElement>) => {
    setCpf(mask(event.target.value))
  }

  const [modal, setModal] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmployeesData>({
    resolver: yupResolver(createEmployeeSchema),
  })

  const handleCreateEmployees: SubmitHandler<
    CreateEmployeesData
  > = async () => {
    const newItem = [...elements]

    newItem.push({
      id: elements.length + 1,
      nome: nameEmployee,
      cpf: cpfEmployee,
      acessLevel: acessLevelEmployee,
      senha: password,
    })

    setElements(newItem)
    setNome('')
    setCpf('')
    setPassword('')
    setAcessLevel('')

    toast.success(`Funcionário Adicionado com sucesso`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    })
    reset()
    localStorage.setItem('cad_employee', JSON.stringify(newItem))
    setElements(newItem)
  }

  function removeItem(id: number) {
    const message = confirm('Deseja realmente excluir esse funcionário?')

    if (message === true) {
      console.log(id)
      const arr = elements.filter((item) => item.id !== id)
      toast.success(`Funcionário Excluido com sucesso`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      })
      const deleteLocal = ({ arr }: any) => {
        arr = localStorage.removeItem('cad_employee')
        setElements(JSON.parse(arr))
      }
      setElements(arr)
      deleteLocal(arr)
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('cad_employee')
    if (data) {
      setElements(JSON.parse(data))
    }
  }, [elements])

  return (
    <ContainerMain>
      <ContainerContent>
        <NavMaster />

        <Container>
          <ContainerList>
            {' '}
            <BtnRegister onClick={() => setModal(true)}>Cadastrar</BtnRegister>
            <ViewList>
              <ListContain>
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

                <ContentInfos>
                  {elements.map((item) => (
                    <FieldData key={item.id}>
                      <FieldName>{item.nome}</FieldName>

                      <FieldCPf>{item.cpf}</FieldCPf>

                      <FieldAcessLevel>
                        {item.acessLevel.toUpperCase()}
                      </FieldAcessLevel>

                      <FieldPassword>{item.senha}</FieldPassword>

                      <FieldActionPainel>
                        <BtnAction>
                          <BsPencil color={ColorIconAction} size={14} />
                        </BtnAction>

                        <BtnAction onClick={() => removeItem(item.id)}>
                          <BsFillTrashFill color={ColorIconAction} size={14} />
                        </BtnAction>
                      </FieldActionPainel>
                    </FieldData>
                  ))}
                </ContentInfos>
              </ListContain>
            </ViewList>
          </ContainerList>
        </Container>
      </ContainerContent>
      {modal && (
        <Modal
          closeModalCopm={() => setModal(false)}
          TextButton={'Cadastrar'}
          conteudo={
            <ViewInput>
              <Input
                {...register('nome')}
                type="text"
                placeholder="NOME" // @ts-ignore
                value={nameEmployee}
                name="nome"
                onChange={(e) => setNome(e.target.value)}
              />
              {errors.nome && <MsgError>{errors.nome.message}</MsgError>}

              <Input
                {...register('cpf')}
                type="text"
                placeholder="CPF" // @ts-ignore
                value={cpfEmployee}
                name="cpf"
                onChange={handleInputChangeCPf}
              />

              {errors.cpf && <MsgError>{errors.cpf.message}</MsgError>}

              <Input
                {...register('senha')}
                type="text"
                placeholder="SENHA" // @ts-ignore
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {errors.senha && <MsgError>{errors.senha.message}</MsgError>}

              <Input
                {...register('acessLevel')}
                type="text"
                placeholder="NÍVEL DE ACESSO" // @ts-ignore
                value={acessLevelEmployee}
                onChange={(e) => setAcessLevel(e.target.value)}
              />

              {errors.acessLevel && (
                <MsgError>{errors.acessLevel.message}</MsgError>
              )}
            </ViewInput>
          }
          TxtTitle={'Novo Funcionário'}
          submitAction={handleSubmit(handleCreateEmployees)}
        ></Modal>
      )}

      <ToastContainer />
    </ContainerMain>
  )
}
