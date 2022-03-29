import React from 'react';

interface ContadorValorProps {
    contador: number;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: ContadorValorProps) => 
        <p>{props.contador}</p>

