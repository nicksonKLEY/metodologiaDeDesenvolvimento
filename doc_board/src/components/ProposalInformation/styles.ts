import styled from 'styled-components'

interface ProposalStatusColor {
  type: 'waiting' | 'pending' | 'typing' | 'refused'
}

export const Container = styled.div<ProposalStatusColor>`
  padding: 1rem 1rem;
  background-color: #1f2442;
  border-radius: 1rem;

  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ type }) =>
    type === 'waiting'
      ? 'white'
      : type === 'pending'
      ? '#F8CB8A'
      : type === 'typing'
      ? '#3FCD7E'
      : '#CC7078'};

  > span {
    width: 8rem;
    text-align: end;
  }
`

export const Bank = styled.p`
  align-self: center;
`
