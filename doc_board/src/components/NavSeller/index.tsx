import React from 'react'
import Sidbar from '../Sidebar'
import { ColorIcon, TitleLink, IconView, ViewLink } from './style'
import { AiOutlineUser } from 'react-icons/ai'

export default function NavSeller() {
  return (
    <React.Fragment>
      <Sidbar
        itemNavigate1={
          <ViewLink>
            <TitleLink>
              <IconView>
                <AiOutlineUser color={ColorIcon} size={25} />
              </IconView>
              Vendedor
            </TitleLink>
          </ViewLink>
        }
        tPage="Vendedor"
      />
    </React.Fragment>
  )
}
