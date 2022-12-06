import React from "react";
import ImgLogo from "../img/deni_logo2.png"

export default function Cabecalho() {
    return (

        <div>
            <header>
                <div>
                    <picture>
                        <img src= {ImgLogo} />
                    </picture>
                </div>
                <nav>
                    <a href='#projetos'>Projetos</a>
                    <a href='#contatos'>Contato</a>
                </nav>
            </header>
        </div>

    )
}