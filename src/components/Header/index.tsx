import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/masterclasses">MASTERCLASSES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
