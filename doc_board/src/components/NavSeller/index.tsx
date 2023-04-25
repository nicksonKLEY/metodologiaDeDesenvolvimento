import React from 'react'
import Sidbar from '../Sidebar'
import { ColorIcon, TitleLink, IconView, ViewLink } from './style'
import { TbFileUpload } from 'react-icons/tb'

export default function NavSeller() {
  return (
    <React.Fragment>
      <Sidbar
        itemNavigate={
          <ViewLink>
            <TitleLink>
              <IconView>
                <TbFileUpload color={ColorIcon} size={25} />
              </IconView>
              Propostas
            </TitleLink>
          </ViewLink>
        }
        tPage="Vendedor"
      />
    </React.Fragment>
  )
}
