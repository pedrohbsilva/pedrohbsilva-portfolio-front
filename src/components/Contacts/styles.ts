import { Form, Input } from 'antd'
import styled from 'styled-components'

export const ContainerContacts = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 50px 0 0 0;
  padding: 10px;
  justify-content: space-evenly;
  background: ${props => props.theme.colors.white};

  @media only screen and (max-width: 600px) {
    margin: 30px 0 0 0;
    flex-direction: column;
  }
`

export const ContainerContactsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1{
    color: ${props => props.theme.colors.turquoise}
  }
  p{
    color: ${props => props.theme.colors.midnightBlue}
  }
`

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0 10px 0 10px;
  .ant-form-item-label {
    text-align: left;
    label{
      color: ${props => props.theme.colors.turquoise};
    }
  }
  .ant-col-16{
    max-width: 100% !important;
  }
  button{
    width: 500px;
    margin-top: 10px;
    background: ${props => props.theme.colors.turquoise};
    color: ${props => props.theme.colors.white};
    height: 50px;
    border-radius: 8px;
    border: 0;

    &:hover{
      background: ${props => props.theme.colors.turquoise100};
      color: ${props => props.theme.colors.blueLinkedin};
    }
  }
  @media only screen and (max-width: 600px) {
    label{
      padding: 0;
    }
    button{
      width: 300px;
    }
  }
`

export const FormInput = styled(Input)`
  width: 500px;
  height: 3.6rem;
  border-radius: 0.8rem;
  border: 1px solid ${props => props.theme.colors.text};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  @media only screen and (max-width: 600px) {
      width: 300px;
  }
`

export const FormTextArea = styled(Input.TextArea)`
  width: 500px;
  height: 8.6rem !important;
  border-radius: 0.8rem;
  border: 1px solid ${props => props.theme.colors.text};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  .ant-form-item-control-input-content{
    max-width: 100% !important;
    background: red;
  }
  @media only screen and (max-width: 600px) {
      width: 300px;
  }
`
