import Sidbar from '../../Sidebar'
import { ViewItems, IconUser } from './styles'
import SelectItem from '../../Sidebar/SelectItem/selectItemSidbar'
import React from 'react'

export default function NavTypist() {
  return (
    <React.Fragment>
      <Sidbar
        itemNavigate={
          <ViewItems>
            <SelectItem
              icon={<IconUser />}
              txtLink={'Digitador'}
              linkNav={'/typist'}
            />
          </ViewItems>
        }
        tPage={'Digitador'}
      />
    </React.Fragment>
  )
}
