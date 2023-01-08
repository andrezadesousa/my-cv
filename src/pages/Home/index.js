import homeImage from '../../assets/image/homeImage.jpg'

import {MapPin, UserCircle, EnvelopeSimple} from 'phosphor-react'

import { HomeInformation } from '../../components/HomeInformation/index'
import { BgGrid } from "../../components/BdGrid/index";

import './styles.css'

export function Home(){
    return(
        <section className="home" id="home">
            <div className="home__container section bd-grid">
                <BgGrid id="home__data">
                    <img src={homeImage} className='home__img' alt='Imagem de Perfil'></img>
                    <h1 className='home__title'>ANDREZA <b>SOUSA</b></h1>
                    <h2 className='home__profession'>Desenvolvedora Front-end Jr</h2>

                    {/*Button to download your CV saved in the pdf folder. Available for mobile */}
                    <div>
                        <a download="" href="/" className="home__button-movil">Download</a>
                    </div>
                </BgGrid>

                <BgGrid id='home__address'>
                    <HomeInformation>
                        <MapPin className='home__icon'></MapPin>São Paulo - Brasil
                    </HomeInformation>

                    <HomeInformation>
                        <UserCircle className='home__icon'></UserCircle> 23 anos
                    </HomeInformation>

                    <HomeInformation>
                        <EnvelopeSimple className='home__icon'></EnvelopeSimple> example@email.com
                    </HomeInformation>
                </BgGrid>
            </div>
        </section>
    )
}