import Sidbar from '../Sidebar'
import { ColorIcon, TitleLink, IconView, ViewLink } from './style'
import { AiOutlineUser } from 'react-icons/ai'
import React from 'react'

export default function NavMaster() {
  // const red = 'color-green-100 text-black'
  // const normaLink = 'color-blue-100 text-white'

  return (
    <React.Fragment>
      <Sidbar
        itemNavigate1={
          <ViewLink>
            {' '}
            <TitleLink to="/registerEmployee">
              <IconView>
                <AiOutlineUser color={ColorIcon} size={25} />
              </IconView>
              Usuário
            </TitleLink>
          </ViewLink>
        }
        tPage={'Master'}
      />
    </React.Fragment>
  )
}
