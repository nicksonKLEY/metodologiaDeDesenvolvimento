import Sidbar from '../Sidebar'
import {
  ViewItems,
  TitleLink,
  IconView,
  ViewLink,
  IconPerformance,
  IconUser,
  TxtLink,
} from './style'

// import { GrDocumentPerformance } from 'react-icons/gr'
// eslint-disable-next-line no-unused-vars
// import Graphic from '@mui/icons-material/Addchart'
import React from 'react'

export default function NavMaster() {
  // const red = 'color-green-100 text-black'
  // const normaLink = 'color-blue-100 text-white'

  return (
    <React.Fragment>
      <Sidbar
        itemNavigate={
          <ViewItems>
            <ViewLink>
              {' '}
              <TitleLink to="/registerEmployee">
                <IconView>
                  <IconUser />
                </IconView>
                <TxtLink>Usuário</TxtLink>
              </TitleLink>
            </ViewLink>
            <ViewLink>
              {' '}
              <TitleLink to="/EmployeePerfomance">
                <IconView>
                  <IconPerformance />
                </IconView>
                <TxtLink>Desempenho</TxtLink>
              </TitleLink>
            </ViewLink>
          </ViewItems>
        }
        tPage={'Master'}
      />
    </React.Fragment>
  )
}
