import { useState } from 'react'

import {
  ContainerMain,
  AnalizedElement,
  FieldClient,
  FieldBank,
  FieldStatus,
} from './styles'
import TypistContainer from '../../components/Typist/ContainerTypist'
import { InfoClientModal } from '../../components/InfoClientModal'

export default function Typist() {
  const [modal, setModal] = useState(false)
  const data = [
    { id: '1', name: 'Danielly', bank: 'Daycoval', status: 'Novo' },
    { id: '2', name: 'Jilza', bank: 'Daycoval', status: 'Novo' },
    { id: '3', name: 'VItoria', bank: 'Ole', status: 'Pendente' },
    { id: '4', name: 'Lucius', bank: 'Pan', status: 'Pendente' },
    { id: '5', name: 'Julia', bank: 'pan', status: 'Pendente' },
  ]
  function modalOPen(id: string) {
    setModal(!modal)
    console.log(id)
  }
  return (
    <ContainerMain>
      <InfoClientModal isOpen={modal} onClose={() => setModal(!modal)} />

      <TypistContainer>
        {data.map((item) => (
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
        ))}
      </TypistContainer>
    </ContainerMain>
  )
}
