import React from 'react';
import { Container, Content } from './styles';
import PerfilImg from '../../assets/perfil.svg'
import GpsImg from '../../assets/gps.svg';
import ApartImg from '../../assets/apart.svg';
import CasaImg from '../../assets/casa.svg';

export function Side(){
    return(
        <Container>
            <header></header>
            <img src={PerfilImg} alt="Foto do Perfil" className="perfil_img"/>
            <Content>
                <h1>André Caetano de Sousa</h1>
                <h3>@andresousa</h3>
                <p>Front-end Developer</p>
                <section>
                    <span>
                        <img src={GpsImg} alt="gpsimg"/>
                        <p>Crato/Ceara-Brasil</p>
                    </span>
                 <div>
                     <span>
                        <img src={ApartImg} alt="gpsimg"/>
                        <p>inCicle</p>
                     </span>
                     <span className="casa">
                        <img src={CasaImg} alt="gpsimg"/>
                        <p>Uninorte</p>
                     </span>
                </div>  

                </section>
            </Content>
            
        </Container>
    )
}