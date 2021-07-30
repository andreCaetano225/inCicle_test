import React from 'react';
import { Container, Container2 } from './styles';
import NiverImg from '../../assets/niver.svg';
import PendeImg from '../../assets/pende.svg';

export function Event(){
    return(
        <>
        <Container>
        <div>
            <img src={NiverImg} alt="niver"/>
            <h3>Aniversariantes</h3>
        </div>
        <header></header>
        <p>Nenhum dos seus amigos comemora aniversário hoje</p>
        </Container>

        <Container2>
        <div>
            <img src={PendeImg} alt="pendencia"/>
            <h3>Pendências</h3>
        </div>
        <header>
            <span>
            Seg,21 de jun
            </span>
            </header>
        <p>Você não possui nenhuma pendência para hoje</p>
        </Container2>
        </>
    )
}