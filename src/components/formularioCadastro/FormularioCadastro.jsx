import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }

  _handleMudarTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
      return (
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
          <select onChange={this._handleMudancaCategoria.bind(this)} class="form-cadastro_input">
            <option>Sem categoria</option>
            {this.props.categorias.map(categoria => {
              return <option>{categoria}</option>
            })}
          </select>
          <input  type="text"
                  placeholder="titulo"
                  className="form-cadastro_input"
                  onChange={this._handleMudarTitulo.bind(this)} />

          <textarea placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                    rows={15}/>

          <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
      );
  }
}

export default FormularioCadastro;