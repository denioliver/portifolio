import React from "react";
import ImgHtml from "../img/logo-html5.png"
import ImgCss from "../img/logo-css3.png"
import ImgJS from "../img/logo-javascript.png"
import ImgCD from '../img/logo-coreldraw.png'
import ImgPS from '../img/logo-photoshopcs3.png'
import ImgReact from '../img/logo_react.png'

export default function Contatos() {
    return (
        <div>
            <section>
                <div id='contatos'>
                    <p>
                        <a href="https://wa.me/5575991489231" target="blank" >
                            <strong> WhatsApp:</strong> +55 75 9148-9231</a>
                    </p>
                    <p>
                        <a href="mailto:denyoliver777@gmail.com">
                            <strong>E-mail:</strong> denyoliver777@gmail.com</a>
                    </p>
                    <p>
                        <a href="https://github.com/denioliver" target="blank" >
                            <strong>Github:</strong> Denivan Oliveira dos Santos</a>
                    </p>
                </div>
            </section>
            <section id='programas'>
                <div>
                    <img className='normal' src={ImgHtml} title='HTML5' alt='logo-HTML5' />
                    <img className='normal' src={ImgCss} title='CSS3' alt='logo-CSS3' />
                    <img id='js' src={ImgJS} title='Java Script' alt='logo-Java Script' />
                </div>
                <div>
                    <img className='normal' src={ImgReact} title='React' alt="logo-react" />
                    <img className='normal' src={ImgCD} title='Corel Draw' alt='logo-CorelDraw' />
                    <img className='normal' src={ImgPS} title='Photoshop Cs6' alt='logo-PhotoshopCs6' />
                </div>
            </section>
        </div>
    )
}