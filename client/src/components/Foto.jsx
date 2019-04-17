import React from "react";
import { Link } from "react-router-dom";

class FotoAtualizacoes extends React.Component {
  render() {
    return (
      <section className="fotoAtualizacoes">
        <Link to="/" className="fotoAtualizacoes-like">
          Likar
        </Link>
        <form className="fotoAtualizacoes-form">
          <input
            type="text"
            placeholder="Adicione um comentário..."
            className="fotoAtualizacoes-form-campo"
          />
          <input
            type="submit"
            value="Comentar!"
            className="fotoAtualizacoes-form-submit"
          />
        </form>
      </section>
    );
  }
}

class FotoInfo extends React.Component {
  render() {
    return (
      <div className="foto-info">
        <div className="foto-info-likes">
          {this.props.foto.likers.map(liker => {
            return <Link to="/" key={liker.id}>{liker.login}, </Link>;
          })}
          curtiram
        </div>

        <p className="foto-info-legenda">
          <Link to="/" className="foto-info-autor">
            {this.props.foto.comentario}
          </Link>
        </p>

        <ul className="foto-info-comentarios">
          {this.props.foto.comentarios.map(comentario => {
            return (

              <li className="comentario" key={comentario.id}>
                <Link to="/" className="foto-info-autor">
                  {comentario.login}
                </Link>
                {comentario.texto}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class FotoHeader extends React.Component {
  render() {
    return (
      <header className="foto-header">
        <figure className="foto-usuario">
          <img
            src={this.props.foto.urlPerfil}
            alt="foto perfil do usuario"
          />
          <figcaption className="foto-usuario">
            <Link to="/">{this.props.foto.loginUsuario}</Link>
          </figcaption>
        </figure>
        <time className="foto-data">{this.props.foto.horario}</time>
      </header>
    );
  }
}

export default class Foto extends React.Component {
  render() {
    return (
      <div className="foto">
        <FotoHeader foto={this.props.foto} />
        <img
          alt="foto"
          className="foto-src"
          src={this.props.foto.urlFoto}
        />
        <FotoInfo foto={this.props.foto} />
        <FotoAtualizacoes />
      </div>
    );
  }
}
