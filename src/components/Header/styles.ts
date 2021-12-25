import styled, { css } from 'styled-components'

import { LinksContainerProps } from 'src/interfaces'

type LinkProps = {
  page: string;
  pageName: string;
}

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px -2px 10px 0px ${props => props.theme.colors.black};
`

export const HeaderContent = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.spacings.container};

    @media only screen and (min-width: 1440px) {
      max-width: ${theme.spacings.containerLarge};
    }

    a {
      font-weight: bold;
      letter-spacing: 0.069rem;
      text-transform: uppercase;
      color: ${theme.colors.title};
    }

    > a {
      font-family: monospace;
      font-size: 4.8rem;
      font-style: italic;

      &:hover {
        text-shadow: initial;
      }

      span {
        text-shadow: 0 0 5px;
        color: ${theme.colors.turquoise};
      }
    }

    button {
      z-index: 4;
      display: none;
      background: none;
      border: 0;

      @media only screen and (max-width: 768px) {
        display: block;
      }

      svg {
        font-size: ${theme.font.sizes.superLarge};
        color: ${theme.colors.green};
      }
    }
  `}
`

export const LinksContainer = styled.ul<LinksContainerProps>`
  ${({ theme, active }) => css`
    list-style: none;
    display: flex;

    li + li {
      margin-left: ${theme.spacings.medium};
    }

    a {
      position: relative;
      transition: text-shadow 1s ease-in-out;

      &::after {
        position: absolute;
        left: 0;
        bottom: -8px;
        content: '';
        width: 0;
        height: 4px;
        background-color: ${theme.colors.turquoise};
        border-radius: 2px;
        box-shadow: 0 0 10px ${theme.colors.turquoise};
      }

      &:hover::after {
        width: 100%;
        transition: width 0.7s ease-in-out;
      }
    }

    @media only screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      width: 65%;
      height: 100vh;
      font-size: ${theme.font.sizes.large};
      background: ${theme.colors.background};
      transform: ${active ? 'translateX(0)' : 'translateX(-100%)'};
      opacity: ${active ? 0.98 : 0};
      visibility: ${active ? 'visible' : 'hidden'};
      transition: 0.3s ease-in-out;



      a:hover::after {
        width: initial;
      }
    }
  `}
`

export const HeaderLink = styled.a<LinkProps>`
  color: ${props => props.page === props.pageName && props.theme.colors.turquoise}!important;
`
