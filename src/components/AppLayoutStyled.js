import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #F4442E;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  
  align-items: center;
  
  padding: 8px 0;
  margin-bottom: 46px;
  border-bottom: 1px solid black;

  
  
`;

export const Menu = styled.ul`
 display: flex;
    gap: 12px;
  
`;