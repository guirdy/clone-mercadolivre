import React from "react";

import { Container, SearchText, LogoIcon, SearchIcon, LightningIcon, Offers } from "./styles";

import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoIcon href="#"><img src={Logo} alt="Logotipo mercado livre"/></LogoIcon>
      <SearchText type="text" placeholder="Buscar produtos, marcas e mais..." />
      <SearchIcon />

    
      <Offers href="#">
        <LightningIcon />
        <h1>Aproveite preços incríveis todos os dias</h1>
      </Offers>
    </Container>
  );
};

export default Header;
