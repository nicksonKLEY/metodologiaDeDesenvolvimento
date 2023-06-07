import { useState, useEffect } from 'react'
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
  ViewInput,
  Input,
  ContentInfos,
  FieldName,
  FieldCPf,
  FieldAcessLevel,
  FieldPassword,
  FieldActionPainel,
  FieldData,
  BtnAction,
  ColorIconAction,
  Select,
} from './style'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import HeaderRegister from '../../../components/Master/headerRegister'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import NavMaster from '../../../components/Master/NavMaster'
import Modal from '../../../components/Modal/Modal'

// Connection
import { FirebaseConnection } from '../../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../../services/Connection/ConnectionPages'
// Model
import { UserParser } from '../../../services/Connection/Firebase/Parsers/UserParser'
// Use cases
import { Insert } from '../../../services/UseCases/Insert'
import { Delete } from '../../../services/UseCases/Delete'
import { Read } from '../../../services/UseCases/Read'
import { Update } from '../../../services/UseCases/Update'
// import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  id: z.string(),
  name: z.string().min(3, 'O nome é obrigatório'),
  cpf: z.string().min(14, 'O CPF deve ter 11 dígitos'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  acessLevel: z.enum(['Vendedor', 'Digitador']),
})

type FormProps = z.infer<typeof schema>

export default function RegisterEmployee() {
  const [elements, setElements] = useState<FormProps[]>([])
  const [modal, setModal] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<FormProps | null>(
    null,
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormProps>({})

  const connection = new FirebaseConnection(ConnectionPages.User)
  const userParser = new UserParser()

  const insert = new Insert(connection, userParser)
  const remove = new Delete(connection)
  const select = new Read(connection, userParser)
  const update = new Update(connection, userParser)

  const handleForm = async (data: FormProps) => {
    try {
      if (selectedEmployee) {
        // Atualizar funcionário existente
        console.log(data)
        await update.this(selectedEmployee.id, data)

        const updatedElements = elements.map((item) => {
          if (item.id === selectedEmployee.id) {
            return {
              ...item,
              name: data.name,
              cpf: data.cpf,
              password: data.password,
              acessLevel: data.acessLevel,
            }
          }
          return item
        })
        setElements(updatedElements)
        localStorage.setItem('cad_employee', JSON.stringify(updatedElements))
        toast.success(`Funcionário atualizado com sucesso`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        })
      } else {
        // Adicionar novo funcionário
        const id = await insert.this(data)
        const newEmployee = {
          id,
          name: data.name,
          cpf: data.cpf,
          password: data.password,
          acessLevel: data.acessLevel,
        }
        setElements((prevElements) => [...prevElements, newEmployee])
        localStorage.setItem(
          'cad_employee',
          JSON.stringify([...elements, newEmployee]),
        )
        reset()
        toast.success(`Funcionário adicionado com sucesso`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        })
      }

      reset() // Limpar o formulário após a submissão
      setModal(false) // Fechar o modal
    } catch (e) {
      toast.error('Falha ao criar usuário', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })
    }
  }

  const removeItem = (id: string) => {
    const message = window.confirm('Deseja realmente excluir esse funcionário?')
    if (message === true) {
      try {
        // remove use case
        remove.this(id)
        const updatedElements = elements.filter((item) => item.id !== id)
        setElements(updatedElements)
        localStorage.setItem('cad_employee', JSON.stringify(updatedElements))
        toast.success(`Funcionário excluído com sucesso`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        })
      } catch {
        toast.error(`Falha ao apagar`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        })
      }
    }
  }

  const handleEdit = (employee: FormProps) => {
    setSelectedEmployee(employee)
    setValue('name', employee.name)
    setValue('cpf', employee.cpf)
    setValue('password', employee.password)
    setValue('acessLevel', employee.acessLevel)
    setModal(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await select.all()
      console.log(result)
      setElements(result)
      reset()
      localStorage.setItem('cad_employee', JSON.stringify(elements))
    }
    fetchData()
  }, [])

  return (
    <ContainerMain>
      <ContainerContent>
        <NavMaster />

        <Container>
          <ContainerList>
            <BtnRegister onClick={() => setModal(true)}>Cadastrar</BtnRegister>
            <ViewList>
              <ListContain>
                <HeaderRegister />
                <ContentInfos>
                  {elements.map((item) => (
                    <FieldData key={item.id}>
                      <FieldName>{item.name}</FieldName>
                      <FieldCPf>{item.cpf}</FieldCPf>
                      <FieldAcessLevel>
                        {item.acessLevel.toUpperCase()}
                      </FieldAcessLevel>
                      <FieldPassword>{item.password}</FieldPassword>
                      <FieldActionPainel>
                        <BtnAction onClick={() => handleEdit(item)}>
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
              <Input {...register('name')} type="text" placeholder="NOME" />
              {errors.name?.message && <p>{errors.name.message}</p>}
              <Input {...register('cpf')} type="text" placeholder="CPF" />
              {errors.cpf?.message && <p>{errors.cpf.message}</p>}
              <Input
                {...register('password')}
                type="text"
                placeholder="SENHA"
              />
              {errors.password?.message && <p>{errors.password.message}</p>}
              <Select {...register('acessLevel')} defaultValue="Digitador">
                <option value="Digitador">Digitador</option>
                <option value="Vendedor">Vendedor</option>
              </Select>
              {errors.acessLevel?.message && <p>{errors.acessLevel.message}</p>}
            </ViewInput>
          }
          TxtTitle={
            selectedEmployee ? 'Editar Funcionário' : 'Novo Funcionário'
          }
          submitAction={handleSubmit(handleForm)}
        />
      )}

      <ToastContainer />
    </ContainerMain>
  )
}
