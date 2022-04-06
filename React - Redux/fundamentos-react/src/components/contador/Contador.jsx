import './contador.css'

import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React, {Component} from 'react'


import Display from './Display';
import PassoForm from './PassoForm'
import Botoes from './Botoes';

class Contador extends Component{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 5
    };

    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo,
        });

    }

    alteraPasso = (novoValor) =>{
        this.setState({
            passo: novoValor,//o "+" convert para um valor inteiro
        });
    }



    render(){
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.alteraPasso} />
                <Botoes onIncremento={this.inc} onDecremento={this.dec}/>
            </div>
        )
    }

}

export default Contador