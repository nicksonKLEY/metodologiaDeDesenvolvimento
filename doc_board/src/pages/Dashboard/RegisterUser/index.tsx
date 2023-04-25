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
// import { mask } from '../../../components/masks/cpf'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import HeaderRegister from '../../../components/Master/headerRegister'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import NavMaster from '../../../components/Master/NavMaster'
import Modal from '../../../components/Modal/Modal'

const schema = z.object({
  id: z.number(),
  name: z.string(),
  cpf: z.string().min(14, 'O CPF deve ter 11 dígitos'),
  password: z.string().min(6, 'a senha deve ter no mínimo 6 caracteres'),
  acessLevel: z.string(),
})

type FormProps = z.infer<typeof schema>

export default function RegisterEmployee() {
  const [elements, setElements] = useState<FormProps[]>([])

  // const handleInputChangeCPf = (event: ChangeEvent<HTMLInputElement>) => {
  //   setCpf(mask(event.target.value))
  // }

  const [modal, setModal] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({ mode: 'all' })

  const handleForm = (data: FormProps) => {
    elements.push(data)

    setElements(elements)

    reset()

    localStorage.setItem('cad_employee', JSON.stringify(elements))

    toast.success(`Funcionário Adicionado com sucesso`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    })
  }

  function removeItem(id: number) {
    const message = confirm('Deseja realmente excluir esse funcionário?')
    if (message === true) {
      const index = elements.findIndex((item) => item.id === id)

      const updatedItems = [...elements]

      updatedItems.splice(index, 1)

      localStorage.setItem('cad_employee', JSON.stringify(updatedItems))

      setElements(updatedItems)

      toast.success(`Funcionário Excluido com sucesso`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      })
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
                {...register('name')}
                type="text"
                placeholder="NOME" // @ts-ignore
                helperText={errors.name?.message}
                error={!!errors.name?.message}
              />

              <Input
                {...register('cpf')}
                type="text"
                placeholder="CPF" // @ts-ignore
                helperText={errors.cpf?.message}
                error={!!errors.name?.message}
              />

              <Input
                {...register('password')}
                type="text"
                placeholder="SENHA" // @ts-ignore
                helperText={errors.password?.message}
                error={!!errors.password?.message}
              />

              <Select {...register('acessLevel')}>
                <option value="" hidden>
                  NÍVEL DE ACESSO
                </option>
                <option>Digitador</option>
                <option>Vendedor</option>
              </Select>
            </ViewInput>
          }
          TxtTitle={'Novo Funcionário'}
          submitAction={handleSubmit(handleForm)}
        ></Modal>
      )}

      <ToastContainer />
    </ContainerMain>
  )
}
