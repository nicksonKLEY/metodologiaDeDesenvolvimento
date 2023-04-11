import NavMaster from '../../../components/NavMaster'
import { ContainerMain, ContainerContent, Container } from './style'
export default function EmployeePerformance() {
  return (
    <ContainerMain>
      <ContainerContent>
        {' '}
        <NavMaster />
        <Container>
          <h1>Performance Employee</h1>
        </Container>
      </ContainerContent>
    </ContainerMain>
  )
}
