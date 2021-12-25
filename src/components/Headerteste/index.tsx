// import Image from 'next/image'

import { HeaderProps } from 'src/interfaces'

import { ContainerHeader } from './styles'
const Header = ({ pageName }:HeaderProps): React.ReactElement => {
  return (
    <>
      <ContainerHeader>
        <button style={{ background: pageName === 'home' && 'blue' }}>Home</button>
        <button style={{ background: pageName === 'cases' && 'blue' }}>Cases</button>
        <button style={{ background: pageName === 'about' && 'red' }}>About</button>
        <button style={{ background: pageName === 'contact' && 'green' }}>Contact Me</button>
        <button style={{ background: pageName === 'blog' && 'yellow' }}>My Blog</button>
        {/* <Image
          src='/images/brazil.png' alt='My Image'
          width={50}
          height={50}
        /> */}

      </ContainerHeader>
    </>
  )
}

export default Header
