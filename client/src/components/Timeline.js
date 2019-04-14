import React from "react";
import Foto from "./Foto";
import "../css/timeline.css";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novasFotos: []
    };
  }

  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(res => res.json())
      .then(fotos => {
        this.setState({ novasFotos: fotos });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='fotos container'>
        {this.state.novasFotos.map(novaFoto => (
          <Foto key={novaFoto.id} foto={novaFoto} />
        ))}
      </div>
    );
  }
}
