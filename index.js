import './estilo.css'


import ReactDOM from 'react-dom';
import React from 'react';

import Cabecalho from './src/componentes/Cabecalho';
import Sobre_mim from './src/componentes/Sobre_mim';
import Projetos from './src/componentes/Projetos'
import Contatos from './src/componentes/Contatos';
import Rodape from './src/componentes/Rodape';


ReactDOM.render(

    <div>
        <Cabecalho />
        <Sobre_mim />
        <Projetos />
        <Contatos />
        <Rodape />
    </div>,
    document.getElementById('root')
)