import React from 'react';
import { Container, Content } from './styles';
import PerfilImg from '../../assets/perfil.svg'

export function Side(){
    return(
        <Container>
            <header></header>
            <img src={PerfilImg} alt="Foto do Perfil" className="perfil_img"/>
            <Content>
                <h1>André Caetano de Sousa</h1>
                <h3>@andresousa</h3>
                <p>Front-end Developer</p>
            </Content>
            
        </Container>
    )
}