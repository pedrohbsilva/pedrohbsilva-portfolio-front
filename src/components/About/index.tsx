import { Button } from 'antd'

import { ContainerAbout, ContainerAboutTitle } from './styles'

const About = (): React.ReactElement => {
  return (
    <ContainerAbout>
      <ContainerAboutTitle>
        <img src='' alt='' />
        <div>

          <h1>Pedro Henrique B. da Silva</h1>
          <h3>Desenvolvedor de Software</h3>
          <p>E-mail: phbs1235@gmail.com</p>
        </div>
      </ContainerAboutTitle>
    </ContainerAbout>
  )
}

export default About
