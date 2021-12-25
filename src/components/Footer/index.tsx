import { SiGithub, SiLinkedin } from 'react-icons/si'
import { IoIosArrowUp } from 'react-icons/io'

import { ContainerFooter } from './styles'

const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear()
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ContainerFooter>
      <div>
        © {currentYear} - Todos os direitos reservados
      </div>

      <div>
        <a
          title='LinkedIn'
          href='https://www.linkedin.com/in/pedro-h-b-da-silva/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <SiLinkedin size={20} />
        </a>

        <a
          title='GitHub'
          href='https://github.com/martins-rafael'
          target='_blank'
          rel='noreferrer noopener'
        >
          <SiGithub size={20} />
        </a>

        <a title='Ir para o topo' onClick={backToTop}>
          <IoIosArrowUp size={20} />
        </a>
      </div>
    </ContainerFooter>
  )
}

export default Footer
