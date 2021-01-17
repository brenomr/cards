import React, { Component } from 'react';
import CardNotas from '../cardNotas';
import './estilo.css';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {
                    this.props.notas.map(
                        (nota, index) => {
                            return (
                                <li className="lista-notas_item" key={index}>
                                    <CardNotas titulo={nota.titulo} texto={nota.texto}/>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        );
    }
}

export default ListaDeNotas;