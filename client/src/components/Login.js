import React from "react";
import "../css/login.css";
import auth from '../auth';
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      msgGeral: "",
      email: "",
      senha: "",
      erroEmail: "",
      erroSenha: "",
      redirectToReferrer: false
    };
  }

  verificaToken = () => {
    if (auth) {
      this.setState({ redirectToReferrer: true });
    }
  }

  emailForm = e => {
    this.setState({ email: e.target.value });
  };

  senhaForm = e => {
    this.setState({ senha: e.target.value });
  };

  verificaCampos = e => {
    e.preventDefault();
    if (!this.state.email && !this.state.senha) {
      return this.setState({ msgGeral: "Os campos e-mail e senha são obrigatórios." });
    } else if (this.state.email && this.state.senha.length > 0 && this.state.senha.length <= 6) {
      return this.setState({ msgGeral: "Por favor verifique seu e-mail e senha." });
    } else if (this.state.email && !this.state.senha) {
      return this.setState({ msgGeral: "O campo senha é obrigatótio." })
    } else if (!this.state.email && this.state.senha) {
      return this.setState({ msgGeral: "O campo e-mail é obrigatótio." })
    } else if (this.state.senha && this.state.email) {
      this.setState({ msgGeral: "" });
      this.enviaForm(e);
    }
  };

  enviaForm = e => {
    e.preventDefault();

    const userDate = {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch("http://localhost:3001/", userDate)
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson) {
          localStorage.setItem("key_token_login", responsejson.token);
          if (!this.state.redirectToReferrer) {
            this.verificaToken();
          }
        }
      });
    console.log(this.state);
  };

  render() {

    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <form className="login-box" onSubmit={this.verificaCampos}>
          <h1 className="header-logo">Instalura</h1>
          <span className="alert-danger">{this.state.msgGeral}</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.emailForm}
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            onChange={this.senhaForm}
          />
          <button className="btn btn-primary" type="submit">OK</button>
        </form>
      </div>
    );
  }
}