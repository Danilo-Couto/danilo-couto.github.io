import React, { useState } from 'react';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Vendedor');

  const magicnumber2 = 12;
  const magicnumber = 6;
  const regexEmail = /\S+@\S+\.\S+/;
  const validEmail = regexEmail.test(email);
  return (
    <div>
      <h1>Cadastrar novo Usuario</h1>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            onChange={ (e) => setName(e.target.value) }
            value={ name }
            data-testid="admin_manage__input-name"
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="admin_manage__input-email"
            type="text"
            name="email"
          />
        </label>
        <label htmlFor="password">
          Seenha:
          <input
            onChange={ (e) => setPassword(e.target.value) }
            value={ password }
            data-testid="admin_manage__input-password"
            type="password"
            name="password"
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            onChange={ (e) => setRole(e.target.value) }
            data-testid="admin_manage__select-role"
            defaultValue={ role }
            name="role"
          >
            <option value="customer">customer</option>
            <option value="seller">seller</option>
            <option value="Adiministrador">Adiministrador</option>
          </select>
        </label>
        <button
          disabled={ !validEmail
             || password.length < magicnumber
             || name.length < magicnumber2 }
          data-testid="admin_manage__button-register"
          type="button"
          value="Cadastrar"
        >
          {' '}
          Cadastrar
          {' '}

        </button>
      </form>
    </div>
  );
}
