import React, { Component } from 'react';
import FormularioCadastro from './components/formularioCadastro';
import ListaDeNotas from './components/listaDeNotas'
import './assets/app.css';
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {notas: []};
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado = { notas:novoArrayNotas };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
// Pode ser declarado no início das classes
// como export default class App ...
