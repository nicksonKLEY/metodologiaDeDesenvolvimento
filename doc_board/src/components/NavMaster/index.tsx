import Sidbar from '../Sidebar'
import { ColorIcon, TitleLink, IconView, ViewLink } from './style'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'

export default function NavMaster() {
  return (
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
          <TitleLink to="/registerteste">Config</TitleLink>
        </ViewLink>
      }
    />
  )
}
