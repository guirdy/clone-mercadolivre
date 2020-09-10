import React from 'react';

import playStationImage from '../../assets/playstation.png';
import SellerInfo from '../SellerInfo';

import { 
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description, 
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={playStationImage} alt="PlayStation 5"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/*<ProductAction />*/}
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Mercado Livre</p>
          <p className="description">
            Receba o produto que está esperando ou devolvemos o seu dinheiro
          </p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">
            garantia de 3 anos
          </p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  );
}

const Info = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        <strong>Processador:</strong> octa-core AMD de arquitetura Zen 2 (7 nm), com clock de até 3.5 GHz;<br/>
        <strong>Chip gráfico:</strong> GPU customizada RDNA 2 com 36 unidades computacionais, clock de até 2,23 GHz e 10,28 Tflop/s;<br/>
        <strong>Memória RAM:</strong> 16 GB GDDR6;<br/>
        <strong>Largura de banda da RAM:</strong> 448 GB/s;<br/>
        <strong>Taxa de transferência da RAM:</strong> 14 GB/s;<br/>
        <strong>Armazenamento interno:</strong> SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado);<br/>
        <strong>Armazenamento expansível:</strong> Compatível com SSDs NVMe;<br/>
        <strong>Armazenamento externo:</strong> suporte a unidades externas via porta USB;<br/>
        <strong>Drive óptico:</strong> leitor de discos Blu-ray 4K UHD;<br/>
        <strong>Reprodução de gráficos:</strong> Suporte a ray tracing;
      </p>
    </Description>
  );
}

export default Product;
