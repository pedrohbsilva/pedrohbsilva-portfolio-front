import Link from 'next/link'
import { useState } from 'react'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'

import { HeaderProps } from 'src/interfaces'

import { content } from './content'
import { HeaderContainer, HeaderContent, LinksContainer, HeaderLink } from './styles'

const Header = ({ pageName }:HeaderProps): React.ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = () => setMenuIsOpen(!menuIsOpen)
  const handleLink = () => menuIsOpen && handleMenu()

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href='/'>
          <a title='Home'>
            <span>{'{'}</span>R<span>{'}'}</span>
          </a>
        </Link>

        <button onClick={handleMenu}>
          {menuIsOpen ? <CgClose /> : <CgMenuRightAlt />}
        </button>

        <LinksContainer active={menuIsOpen} style={{ margin: 0 }}>
          {content.map(({ label, url, page }) => (
            <li key={label}>
              <Link href={url}>
                <HeaderLink
                  onClick={handleLink}
                  page={page}
                  pageName={pageName}
                >
                  {label}
                </HeaderLink>
              </Link>
            </li>
          ))}
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
