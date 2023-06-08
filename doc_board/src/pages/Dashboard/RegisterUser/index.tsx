/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'
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
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(3, 'O nome é obrigatório'),
  cpf: z
    .string()
    .nonempty('O CPF é obrigátório')
    .min(14, 'O CPF deve ter 11 dígitos'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
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
  } = useForm<FormProps>({ resolver: zodResolver(schema) })

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
        await update.this(selectedEmployee.cpf, data)

        const updatedElements = elements.map((item) => {
          if (item.cpf === selectedEmployee.cpf) {
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

        const updatedElements = elements.filter((item) => item.cpf !== id)

        setElements(updatedElements)

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
    }
    fetchData()
  }, [])

  return (
    <S.ContainerMain>
      <S.ContainerContent>
        <NavMaster />

        <S.Container>
          <S.ContainerList>
            <S.BtnRegister onClick={() => setModal(true)}>
              Cadastrar
            </S.BtnRegister>
            <S.ViewList>
              <S.ListContain>
                <HeaderRegister />
                <S.ContentInfos>
                  {elements.map((item) => (
                    <S.FieldData key={item.cpf}>
                      <S.FieldName>{item.name}</S.FieldName>
                      <S.FieldCPf>{item.cpf}</S.FieldCPf>
                      <S.FieldAcessLevel>
                        {item.acessLevel.toUpperCase()}
                      </S.FieldAcessLevel>
                      <S.FieldPassword>{item.password}</S.FieldPassword>
                      <S.FieldActionPainel>
                        <S.BtnAction onClick={() => handleEdit(item)}>
                          <BsPencil color={S.ColorIconAction} size={14} />
                        </S.BtnAction>
                        <S.BtnAction onClick={() => removeItem(item.cpf)}>
                          <BsFillTrashFill
                            color={S.ColorIconAction}
                            size={14}
                          />
                        </S.BtnAction>
                      </S.FieldActionPainel>
                    </S.FieldData>
                  ))}
                </S.ContentInfos>
              </S.ListContain>
            </S.ViewList>
          </S.ContainerList>
        </S.Container>
      </S.ContainerContent>

      {modal && (
        <Modal
          closeModalCopm={() => setModal(false)}
          TextButton={'Cadastrar'}
          conteudo={
            <S.ViewInput>
              <S.Input {...register('name')} type="text" placeholder="Email" />
              {errors.name?.message && (
                <S.MsgError>{errors.name?.message}</S.MsgError>
              )}
              <S.Input {...register('cpf')} type="text" placeholder="CPF" />
              {errors.cpf?.message && (
                <S.MsgError>{errors.cpf?.message}</S.MsgError>
              )}
              <S.Input
                {...register('password')}
                type="text"
                placeholder="Senha"
              />
              {errors.password?.message && (
                <S.MsgError>{errors.password?.message}</S.MsgError>
              )}
              <S.Select {...register('acessLevel')} defaultValue="Digitador">
                <option value="Digitador">Digitador</option>
                <option value="Vendedor">Vendedor</option>
              </S.Select>
              {errors.acessLevel?.message && (
                <S.MsgError>{errors.acessLevel?.message}</S.MsgError>
              )}
            </S.ViewInput>
          }
          TxtTitle={
            selectedEmployee ? 'Editar Funcionário' : 'Novo Funcionário'
          }
          submitAction={handleSubmit(handleForm)}
        />
      )}

      <ToastContainer />
    </S.ContainerMain>
  )
}
