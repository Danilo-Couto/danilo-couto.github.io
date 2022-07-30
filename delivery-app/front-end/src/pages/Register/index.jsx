import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Form, Header2, Input, NButton, Paragraph } from '../Login/style';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isHidden, setHidden] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const magicnumber = 6;
  const regexEmail = /\S+@\S+\.\S+/;
  const validEmail = regexEmail.test(email);
  const magicnumber2 = 12;
  const CONFLIC_STATUS_CODE = 409;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };
    try {
      await axios.post('http://localhost:3001/register', data);
      history.push('/customer/products');
    } catch (error) {
      if (error.response.status === CONFLIC_STATUS_CODE) {
        setHidden(false);
      }
    }
  };

  return (
    <div>
      <Header2>Cadastro </Header2>
      <Form>
        <Header2>Nome</Header2>
        <Input
          data-testid="common_register__input-name"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Seu Nome"
        />

        <Header2>Email</Header2>
        <Input
          data-testid="common_register__input-email"
          type="email"
          defaultValue={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="seu-email@site.com.br"
        />

        <Header2>Senha</Header2>
        <Input
          data-testid="common_register__input-password"
          defaultValue={ password }
          onChange={ (e) => setPassword(e.target.value) }
          type={ showPassword ? 'password' : 'text' }
          placeholder="******************"
        />
        <NButton type="button" onClick={ () => setShowPassword(!showPassword) }>
          {' '}
          { showPassword ? 'Ocultar' : 'Mostrar' }
          {' '}
        </NButton>

        <NButton
          disabled={ !validEmail
            || password.length < magicnumber
            || name.length < magicnumber2 }
          onClick={ handleSubmit }
          data-testid="common_register__button-register"
          // common_register__button-register
        >

          Cadastrar
        </NButton>

        <Paragraph
          data-testid="common_register__element-invalid_register"
          hidden={ isHidden }
        >
          {' '}
          Mensagem de erro
          {' '}

        </Paragraph>
      </Form>
    </div>
  );
}
