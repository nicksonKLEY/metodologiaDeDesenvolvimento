import Sidbar from '../../Sidebar'
import { ViewItems, IconPerformance, IconUser } from './style'
import SelectItem from '../../Sidebar/SelectItem/selectItemSidbar'
import React from 'react'

export default function NavMaster() {
  return (
    <React.Fragment>
      <Sidbar
        itemNavigate={
          <ViewItems>
            <SelectItem
              icon={<IconUser />}
              txtLink={'Usuário'}
              linkNav={'/registerEmployee'}
            />
            <SelectItem
              txtLink={'Desempenho'}
              icon={<IconPerformance />}
              linkNav={'/EmployeePerfomance'}
            />
          </ViewItems>
        }
        tPage={'Master'}
      />
    </React.Fragment>
  )
}
