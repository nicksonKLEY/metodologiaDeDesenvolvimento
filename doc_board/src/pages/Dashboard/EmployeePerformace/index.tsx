import NavMaster from '../../../components/NavMaster'
import { Chart } from 'react-google-charts'
import {
  ContainerMain,
  ContainerContent,
  Container,
  ContainerPerformance,
  ViewPerformance,
  TitlePage,
} from './style'
export const data = [
  ['Element', 'Vendas R$', { role: 'style' }],
  ['Dacnny', 85.94455, '#FF8AD0'], // RGB value
  ['Jacque', 145.457, '#B283FF'], // English color name
  ['Jilza', 165.478, '#A3FF83'],
  ['Lucius', 43.014, '#8397FF'],
  ['Ryan', 43.014, '#26293B'],
  ['Vitoria', 100.874, '#FFDD65'], // CSS-style declaration
]
export default function EmployeePerformance() {
  return (
    <ContainerMain>
      <ContainerContent>
        {' '}
        <NavMaster />
        <Container>
          <ContainerPerformance>
            <ViewPerformance>
              {' '}
              <TitlePage>Painel de desempenho</TitlePage>
              <Chart
                chartType="ColumnChart"
                width="100%"
                data={data}
                height="50rem"
              />
            </ViewPerformance>
          </ContainerPerformance>
        </Container>
      </ContainerContent>
    </ContainerMain>
  )
}
