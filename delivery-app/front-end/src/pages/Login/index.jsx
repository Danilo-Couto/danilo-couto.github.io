import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { monkeyImg, passLength, urlLogin } from '../../services/constants';
import { getLocalStorage, setLocalStorage } from '../../services/localStorage';
import {
  Container,
  Form, Header2,
  Image, Input, LButton,
  NButton,
  Paragraph,
} from './style';

export default function Login() {
  const [ishidden, setHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);

  const history = useHistory();
  const regexEmail = /\S+@\S+\.\S+/;
  const validEmail = regexEmail.test(email);

  useEffect(() => {
    const localStorage = getLocalStorage('user');
    if (localStorage) {
      history.push('/customer/products');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validEmail && password.length >= passLength) {
      axios.post(urlLogin, { email, password })
        .then((res) => {
          const whoIs = res.data.userFound;

          if (whoIs.role === 'seller') {
            setLocalStorage('seller', whoIs);
            return history.push('/seller/orders');
          }
          if (whoIs.role === 'administrator') {
            setLocalStorage('administrator', whoIs);
            return history.push('/admin/manage');
          }
          setLocalStorage('user', whoIs);
          return history.push('/customer/products');
        })
        .catch((err) => {
          setHidden(false);
          console.log(err.response.data.message);
        });
    }
  };

  return (
    <Container>
      <Image src={ monkeyImg } />
      <Header2> Monke </Header2>
      <Form>
        <Header2> Email</Header2>
        <Input
          onChange={ (e) => setEmail(e.target.value) }
          className="email"
          data-testid="common_login__input-email"
          type="text"
          placeholder="email@tryber.com.br"
        />

        <Header2> Senha </Header2>
        <Input
          onChange={ (e) => setPassword(e.target.value) }
          className="password"
          type={ showPassword ? 'text' : 'password' }
          data-testid="common_login__input-password"
          placeholder="***********"
        />
        {/* <ShowPassword
          type="checkbox"
          onClick={ () => setShowPassword(!showPassword) }
        >
          Mostrar senha
        </ShowPassword> */}
        <LButton
          onClick={ handleSubmit }
          disabled={ !validEmail || password.length < passLength }
          data-testid="common_login__button-login"
          type="button"
        >
          Entrar
        </LButton>
        <NButton
          type="button"
          onClick={ () => history.push('/register') }
          data-testid="common_login__button-register"
        >
          {' '}
          Ainda não tenho conta
          {' '}

        </NButton>
        <Paragraph
          data-testid="common_login__element-invalid-email"
          hidden={ ishidden }
        >
          {' '}
          Mensagem de erro
          {' '}
        </Paragraph>
      </Form>
    </Container>
  );
}
