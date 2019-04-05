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
      headers: {
        "Content-Type": "application/json"
      }
    };
    
    fetch("http://localhost:3001", userDate)
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson) {
          localStorage.setItem("key_token_login", responsejson.token);
        }
      });
  };

  render() {
    return (
      <div>
        <form className="login-box" onSubmit={this.enviaForm}>
          <h1 className="header-logo">Instalura</h1>
          <span>{this.state.msg}</span>
          <input
            name="email"
            type="email"
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
