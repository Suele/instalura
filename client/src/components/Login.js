import React, { Component } from "react";
import "../css/login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
  }

  enviaForm = e => {
    e.preventDefault();

    const userDate = {
      method: "POST",
      body: JSON.stringify({
        email: this.email.value,
        senha: this.senha.value
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    console.log(userDate);
    fetch("http://localhost:3001/auth/login", userDate)
      .then(response => {
        response.ok
          ? response.text()
          : this.setState({
              msg: "Dados incorretos verifique seu email e senha."
            });
      })
      .then(tokenUsuario => console.log("token: ", tokenUsuario));
  };

  render() {
    return (
      <div>
        <form className="login-box" onSubmit={this.enviaForm}>
          <h1 className="header-logo">Instalura</h1>
          <span>{this.state.msg}</span>
          <input
            name="email"
            type="text"
            placeholder="Email"
            ref={inputEmail => (this.email = inputEmail)}
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            ref={inputSenha => (this.senha = inputSenha)}
          />
          <input type="submit" value="ok" />
        </form>
      </div>
    );
  }
}
