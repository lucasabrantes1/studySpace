import React,{Component} from "react";
import ContadorValor from "./ContadorValor";

interface ContadorProps {
    valorInicial?: number;
}

interface ContadorState {
    valor: number;
}

export default class Contador extends Component<ContadorProps, ContadorState> {

    public state = { valor: this.props.valorInicial || 0}
    
    render(){
        return(
            <ContadorValor contador={this.state.valor} />
        )
    }
}