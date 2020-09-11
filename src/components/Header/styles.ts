import styled from "styled-components";
import { HiOutlineSearch } from 'react-icons/hi';
import { FiZap } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled.a`
  > img {
    width: 180px;
    margin-right: 20px;
  }
`;

export const SearchText = styled.input`
  width: 500px;
  height: 35px;
  padding-left: 10px;
  background: var(--color-white);

  ::placeholder {
    color: var(--color-search-placeholder);
  }

  &:focus {
    outline: 0;
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 35px;
  height: 35px;
  padding: 5px;
  background: var(--color-white);
  color: var(--color-search-placeholder);
  border-left: 1px solid var(--color-border);
  cursor: pointer;
`;

export const Offers = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-black);

  > h1 {
    font-size: 16px;
  }
`;

export const LightningIcon = styled(FiZap)`
  font-size: 30px;
  margin-left: 30px;
  margin-right: 10px;
`;