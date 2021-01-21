import React, { Component } from 'react';
import FormularioCadastro from './components/formularioCadastro';
import ListaDeNotas from './components/listaDeNotas';
import ListaDeCategorias from './components/listaDeCategorias';
import './assets/app.css';
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: [],
      categorias:[],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado = { notas:novoArrayNotas };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias: novoArrayCategorias};
    this.setState(novoEstado);
  };

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

export default App;
// Pode ser declarado no início das classes
// como export default class App ...
