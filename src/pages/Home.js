import homeImage from '../assets/image/homeImage.jpg'
import {MapPin, UserCircle, EnvelopeSimple} from 'phosphor-react'
import { HomeInformation } from '../components/HomeInformation'
import '../styles/home.css'

export function Home(){
    return(
        <section className="home" id="home">
            <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                    <img src={homeImage} className='home__img' alt='Imagem de Perfil'></img>
                    <h1 className='home__title'>ANDREZA <b>SOUSA</b></h1>
                    <h2 className='home__profession'>Desenvolvedora Front-end Jr</h2>

                    {/*Button to download your CV saved in the pdf folder. Available for mobile */}
                    <div>
                        <a download="" href="/" className="home__button-movil">Download</a>
                    </div>
                </div>

                <div className='home__address bd-grid'>
                    <HomeInformation>
                        <MapPin className='home__icon'></MapPin>São Paulo - Brasil
                    </HomeInformation>

                    <HomeInformation>
                        <UserCircle className='home__icon'></UserCircle> 23 anos
                    </HomeInformation>

                    <HomeInformation>
                        <EnvelopeSimple className='home__icon'></EnvelopeSimple> example@email.com
                    </HomeInformation>
                </div>
            </div>
        </section>
    )
}