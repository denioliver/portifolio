import React from "react";
import ImgProjetoRedesSociais from "../img/tela-projeto-rede-sociais.jpg"
import ImgProjetoFormulario from "../img/projeto-formulario.jpg"

export default function Projetos() {
    return (
        <div>
            <section id='projetos'>
                <h1>
                    Projetos
                </h1>
                <div className='projeto'>
                    <p className='projeto'>
                        <img src= { ImgProjetoRedesSociais } alt='projeto redes sociais' />
                        Redes sociais - HTML5/CSS
                        <a href={'https://denioliver.github.io/projeto-social/'} target='_blank'>Acesse</a>
                    </p>
                </div>
                <div className='projeto'>
                    <p className='projeto'>
                        <img src= { ImgProjetoFormulario } />
                        Formulário - HTML5 / CSS / JavaScript
                        <a href='https://denioliver.github.io/projeto-formulario/' target='_blank'>Acesse</a>
                    </p>
                </div>
                <div>
                    <p>
                        Em processo
                    </p>
                </div>
            </section>
        </div>
    )
}