import { ReactNode } from 'react'
import { ViewLink, TitleLink, TxtLink, IconView } from './style'

interface SelectItems {
  txtLink: string
  icon: ReactNode
  linkNav: string
}
export default function SelectItem({ txtLink, icon, linkNav }: SelectItems) {
  return (
    <ViewLink>
      <TitleLink to={linkNav}>
        <IconView>{icon}</IconView>
        <TxtLink>{txtLink}</TxtLink>
      </TitleLink>
    </ViewLink>
  )
}
