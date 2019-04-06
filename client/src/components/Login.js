import React from 'react';
import '../css/login.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '',
      email: '',
      senha: '',
      erroEmail: '',
      erroSenha: '',
    };
  }

  emailForm = (e) => {
    this.setState({ email: e.target.value });
  }

  senhaForm = (e) => {
    this.setState({ senha: e.target.value });
  }

  validacao = (e) => {
    e.preventDefault();
    if (!this.state.email && !this.state.senha) {
      return this.setState({ erroEmail: 'o campo e-mail está vaziu.', erroSenha: 'o campo senha está vaziu.' });
    }
    else if (!this.state.email && this.state.senha >= 6) {
      return this.setState({ erroEmail: 'o campo e-mail está vaziu.', erroSenha: '' });
    }
    else if (!this.state.senha) {
      return this.setState({ erroSenha: 'o campo senha está vaziu.' });
    }
    else if (this.state.senha.length > 0 && this.state.senha.length < 6 && !this.state.email) {
      return this.setState({ erroEmail: 'o campo e-mail está vaziu.', erroSenha: 'o campo senha contém 6 caracteres ou mais.' });
    }
    else if (this.state.senha.length > 0 && this.state.senha.length < 6 && this.state.email) {
      return this.setState({ erroEmail: '', erroSenha: 'o campo senha contém 6 caracteres ou mais.' });
    }
    else if (this.state.senha.length >= 6 && !this.state.email) {
      return this.setState({ erroEmail: 'o campo e-mail está vaziu.', erroSenha: '' });
    }
    else if (this.state.senha && this.state.email) {
      this.setState({ erroEmail: '', erroSenha: '' });
      this.enviaForm(e);
    }
  }

  enviaForm = (e) => {
    e.preventDefault();

    const userDate = {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001', userDate)
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson) {
          localStorage.setItem('key_token_login', responsejson.token);
        }
      });
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <form className="login-box" onSubmit={this.validacao}>
          <h1 className="header-logo">Instalura</h1>
          <span>{this.state.msg}</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.emailForm}
          />
          <span>{this.state.erroEmail}</span>
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            onChange={this.senhaForm}
          />
          <span>{this.state.erroSenha}</span>
          <input type="submit" value="ok" />
        </form>
      </div>
    );
  }
}
