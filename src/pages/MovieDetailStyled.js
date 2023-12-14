import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBack = styled(Link)`
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  background-color: #f4442e;

  &:hover {
    color: white;
    background-color: Teal;
  }
`;

export const GoBackWrapper = styled.div`
  margin-bottom: 18px;
`;

export const NavBtn = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #f4442e;
  }
`;

export const AddInfoNav = styled.ul`
  display: flex;
  gap: 12px;
  padding-bottom: 40px;
`;
