import styled from "styled-components";
import { FiTablet } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  padding: 22px;
  background: var(--color-white);
  border-top: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 30px;
`;

export const LinksFooter = styled.div`
display: flex;
flex-direction: column;

  > div {
    display: flex;

    > a {
      font-size: 12px;
      color: var(--color-black);
      text-decoration: none;
      margin-right: 15px;
    }
  }
  > div + div {
    font-size: 12px;
    font-weight: 300;
    color: var(--color-footer);
    margin-top: 10px;
  }
`;

export const LinkApp = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: 5px;
  background: var(--color-header);
  border: 1px solid var(--color-border);
  border-radius: 5px;

  > p {
    font-size: 12px;
    color: var(--color-black);
  }

  @media(max-width: 1000px) {
    display: none;
  }
`;

export const MobileIcon = styled(FiTablet)`
  font-size: 20px;
  color: var(--color-black);
  margin-right: 5px;
`;
