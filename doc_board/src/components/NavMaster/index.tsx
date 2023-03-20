import Sidbar from '../Sidebar'
import { ColorIcon, TitleLink, IconView, ViewLink } from './style'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
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
            <IconView>
              <AiOutlineUser color={ColorIcon} size={25} />
            </IconView>
            <TitleLink to="/registerEmployee">Usuário</TitleLink>
          </ViewLink>
        }
        itemNavigate2={
          <ViewLink>
            {' '}
            <IconView>
              <AiOutlineSetting color={ColorIcon} size={25} />
            </IconView>
            <TitleLink to="/ConfigDashboard">Config</TitleLink>
          </ViewLink>
        }
      />
    </React.Fragment>
  )
}
