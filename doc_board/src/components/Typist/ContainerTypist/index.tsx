/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import NavTypist from '../TypistSidebar'
import {
  Container,
  ContainerContent,
  ContainerMain,
  ContainerClient,
  ViewPerformance,
} from './style'
type ChildrenProps = {
  children: ReactNode
}
export default function TypistContainer({ children }: ChildrenProps) {
  return (
    <ContainerContent>
      {' '}
      <NavTypist />{' '}
      <Container>
        <ContainerClient>
          <ViewPerformance>{children}</ViewPerformance>
        </ContainerClient>
      </Container>
    </ContainerContent>
  )
}
