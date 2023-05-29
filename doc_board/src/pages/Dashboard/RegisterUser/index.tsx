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
import { Insert } from '../../../services/UseCases/Insert'
import { UserParser } from '../../../services/Connection/Firebase/Parsers/UserParser'
import { firebaseConnection } from '../../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../../services/Connection/ConnectionPages'
import { Delete } from '../../../services/UseCases/Delete'

const schema = z.object({
id: z.string(),
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

const insert = new Insert(new firebaseConnection(ConnectionPages.User), new UserParser())
const remove = new Delete(new firebaseConnection(ConnectionPages.User))

const handleForm = async (data: FormProps) => {
  // TODO: - adding a load component to user know is waiting 
  // TODO: - Jogar isso tudo na service
  try {
    data.id = await insert.this(data)
    // data.id = docRef.id

    elements.push(data)

    setElements(elements)

    reset()

    localStorage.setItem('cad_employee', JSON.stringify(elements))

    toast.success(`Funcionário Adicionado com sucesso`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    })
  } catch (e) {
    toast.error(
      'falha ao criar usuario', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      }
    )
  }
}

  async function removeItem(id: string) {
  const message = confirm('Deseja realmente excluir esse funcionário?')
  if (message === true) {

    try {
      remove.this(id)

      const index = elements.findIndex((item) => item.id === id)

      const updatedItems = [...elements]

      updatedItems.splice(index, 1)

      localStorage.setItem('cad_employee', JSON.stringify(updatedItems))

      setElements(updatedItems)

      toast.success(`Funcionário Excluido com sucesso`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      })
    } catch {
      toast.success(`Falha ao apagar`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      })
    }
    
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
