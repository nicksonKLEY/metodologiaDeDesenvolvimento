import React from 'react'
import Sidbar from '../Sidebar'
import SelectItem from '../Sidebar/SelectItem/selectItemSidbar'
import { ViewLink, IconSeller } from './style'

export default function NavSeller() {
  return (
    <React.Fragment>
      <Sidbar
        itemNavigate={
          <ViewLink>
            <SelectItem
              txtLink={'Propostas'}
              icon={<IconSeller />}
              linkNav={'/'}
            />
          </ViewLink>
        }
        tPage="Vendedor"
      />
    </React.Fragment>
  )
}
