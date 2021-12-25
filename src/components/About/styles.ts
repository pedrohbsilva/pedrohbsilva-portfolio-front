import styled from 'styled-components'

export const ContainerAbout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 10px;
  justify-content: space-evenly;
  background: ${props => props.theme.colors.white};

  @media only screen and (max-width: 600px) {
    margin:0 0 0 0;
    flex-direction: column;
  }
`

export const ContainerAboutTitle = styled.div`
  display: flex;

`
