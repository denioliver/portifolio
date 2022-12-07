import './estilo.css'


import ReactDOM from 'react-dom';
import React from 'react';

import Cabecalho from './componentes/Cabecalho'
import Sobre_mim from './componentes/Sobre_mim'
import Projetos from './componentes/Projetos'
import Contatos from './componentes/Contatos'
import Rodape from './componentes/Rodape'

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