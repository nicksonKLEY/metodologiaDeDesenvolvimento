import { useState } from 'react'
import {
  ContainerMain,
  AnalizedElement,
  FieldClient,
  FieldBank,
  FieldStatus,
} from './styles'
import Modal from '../../components/Modal/Modal'
import TypistContainer from '../../components/Typist/ContainerTypist'

export default function Typist() {
  const [modal, setModal] = useState(false)
  const [content, setContent] = useState('')
  const data = [
    { id: '1', name: 'Danielly', bank: 'Daycoval', status: 'Novo' },
    { id: '2', name: 'Jilza', bank: 'Daycoval', status: 'Novo' },
    { id: '3', name: 'VItoria', bank: 'Ole', status: 'Pendente' },
    { id: '4', name: 'Lucius', bank: 'Pan', status: 'Pendente' },
    { id: '5', name: 'Julia', bank: 'pan', status: 'Pendente' },
  ]
  function modalOPen(id: string) {
    setContent(id)
    setModal(true)
  }
  return (
    <ContainerMain>
      <TypistContainer>
        {data.map((item) => {
          return (
            <AnalizedElement
              key={item.id}
              style={{
                color: item.status === 'Pendente' ? '#F1C889' : '#fff',
              }}
              onClick={() => modalOPen(item.name)}
            >
              <FieldClient>{item.name} </FieldClient>{' '}
              <FieldBank> {item.bank}</FieldBank>{' '}
              <FieldStatus>{item.status}</FieldStatus>
            </AnalizedElement>
          )
        })}
      </TypistContainer>
      {modal && (
        <Modal
          closeModalCopm={() => setModal(false)}
          TextButton={'aprovar'}
          conteudo={<p>{content}</p>}
          TxtTitle={'Nova Digitação'}
          submitAction={function (e: any): void {
            throw new Error('Function not implemented.')
          }}
        />
      )}
    </ContainerMain>
  )
}
