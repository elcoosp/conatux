import styled from 'styled-components'

const radius = {
  sm: '3px'
}
const shadow = {
  sm: '3px 3px 8px 2px rgba(0,0,0,.1)'
}
const spacing = {
  md: '10px'
}
const Input = styled.input`
  margin: ${spacing.md};
  padding: ${spacing.md};
  border: 0px;
  border-radius: ${radius.sm};
  box-shadow: ${shadow.sm};
`

export default Input
