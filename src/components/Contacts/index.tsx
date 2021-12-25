import { Button } from 'antd'

import { FormProps } from 'src/interfaces'

import {
  ContainerContacts,
  FormContainer,
  FormItem,
  FormInput,
  FormTextArea,
  ContainerContactsDiv
} from './styles'

const Contacts = (): React.ReactElement => {
  const onFinish = (values: FormProps) => {
    return 'oi'
  }

  return (
    <ContainerContacts>
      <ContainerContactsDiv>
        <h1>Ainda com dúvidas?</h1>
        <p>Agende uma conversa comigo para resolver suas dúvidas</p>
      </ContainerContactsDiv>
      <FormContainer
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <FormItem
          label='Seu nome'
          name='name'
          rules={[{ required: true, message: 'Por favor, preencha seu nome!' }]}
        >
          <FormInput />
        </FormItem>
        <FormItem
          label='Seu e-mail'
          name='email'
          rules={[{ required: true, message: 'Por favor, preencha seu e-mail!' }]}
        >
          <FormInput />
        </FormItem>
        <FormItem
          label='Seu telefone'
          name='phone'
          rules={[{ required: true, message: 'Por favor, preencha seu telefone!' }]}
        >
          <FormInput />
        </FormItem>
        <FormItem
          label='Mensagem'
          name='information'
          rules={[{ required: true, message: 'Por favor, preencha sua mensagem' }]}
        >
          <FormTextArea />
        </FormItem>

        <FormItem>
          <Button htmlType='submit'>
            Enviar
          </Button>
        </FormItem>
      </FormContainer>
    </ContainerContacts>
  )
}

export default Contacts
