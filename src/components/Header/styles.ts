import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: white;
  ${({ theme }) => theme.typography.button};
  ${({ theme }) => theme.typography.button};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  text-decoration: none;
  position: relative;
  transition: all 0.4s ease;
  &.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &::after {
    position: absolute;
    border-bottom: 3px solid white;
    content: '';
    display: block;
    transition: all 0.4s ease;
    bottom: -4px;
    left: 0px;
    width: 100%;
    opacity: 0;
  }
  &:hover {
    color: white;
    &::after {
      opacity: 1;
      bottom: 0px;
    }
  }
`;
