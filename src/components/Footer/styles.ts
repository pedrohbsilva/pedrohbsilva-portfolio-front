import styled, { css } from 'styled-components'

export const ContainerFooter = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.gray};
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.large} 1.6rem;
    width: 100%;
    color: ${theme.colors.white};
    background: ${theme.colors.turquoise};

    span {
      font-weight: 700;
      color: ${theme.colors.turquoise};
    }

    a {
      margin: ${theme.spacings.small};
      font-weight: 700;
      line-height: 0;
      padding: 8px;
      transition: all 0.3s ease-in-out;
      background: white;
      border-radius: 50px;

      &:nth-child(1){
      color: ${theme.colors.blueLinkedin};
      }
      &:nth-child(2){
        color: ${theme.colors.black};
      }
      &:last-of-type {
        color: ${theme.colors.turquoise};
        cursor: pointer;
        &:hover {
          border-color: ${theme.colors.midnightBlue};
          box-shadow: 0 0 5px ${theme.colors.midnightBlue};
        }
      }

      &:hover {
        border-color: ${theme.colors.purple};
        box-shadow: 0 0 5px ${theme.colors.purple};
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;

      a {
        margin-top: ${theme.spacings.medium};
      }
    }
  `}
`
