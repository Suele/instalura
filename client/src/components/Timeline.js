import React, { Component } from 'react';
import Foto from './Foto';

export default class Timeline extends Component {


  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/alots')
  }

    render(){
        return (
        <div className="fotos container">
          <Foto/>
          <Foto/>
        </div>            
        );
    }
}