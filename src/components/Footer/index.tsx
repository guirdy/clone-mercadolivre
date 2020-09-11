import React from "react";

import { 
  Container, 
  LinksFooter, 
  LinkApp, 
  MobileIcon, 
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <LinksFooter>
        <div>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Termos e condições</a>
          <a href="#">Como cuidamos da sua privacidade</a>
          <a href="#">Contato</a>
        </div>
        <div>
          <p>Copyright © 1999-2020</p>
        </div>
      </LinksFooter>

      <LinkApp href="https://www.mercadolivre.com.br/gz/app" target="_blank">
        <MobileIcon />
        <p>Baixe grátis o app do Mercado Livre!</p>
      </LinkApp>
    </Container>
  );
};

export default Footer;
