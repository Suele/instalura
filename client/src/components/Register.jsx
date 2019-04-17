import React from "react";
import "../css/register.css";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <form className='rounded form-register mx-auto'>
          <div className='container-fluid'>
            <h1>Cadastre-se</h1>

            <div className='form-group col-12'>
              <label htmlFor='nome'>Nome</label>
              <input
                type='text'
                id='nome'
                required='required'
                className='form-control form-control-lg'
                minLength='6'
                maxLength='15'
                placeholder='nome'
              />
            </div>

            <div className='form-group col-12'>
              <label htmlFor='sobreNome'>Sobrenome</label>
              <input
                type='text'
                id='sobreNome'
                required='required'
                maxLength='50'
                className='form-control form-control-lg'
                placeholder='sobrenome'
              />
            </div>

            <div className='form-group col-12'>
              <label htmlFor='e-mail'>E-mail</label>
              <input
                type='email'
                id='e-mail'
                required='required'
                className='form-control form-control-lg'
                placeholder='e-mail'
              />
            </div>

            <div className='form-group col-12'>
              <label htmlFor='password'>Senha</label>
              <input
                type='password'
                id='password'
                required='required'
                className='form-control form-control-lg'
                placeholder='senha'
              />
            </div>
            <div className='row'>
              <div className='col-3 form-button'>
                <button type='submit' className='btn btn-success btn-lg '>
                  cadastrar
                </button>
              </div>
              <div className='col-8 form-link'>
                <Link className='form-style-link' to='/'>
                  Já tem cadastro, então faça login.
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
