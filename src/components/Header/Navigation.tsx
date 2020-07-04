import React from 'react';

import { Routes, IRoute } from '../Routing';
import { NavigationLink } from './styles';

export interface INavigation {
  handleClose: () => void;
}

export const Navigation: React.FC<INavigation> = ({ handleClose }) => {
  const renderLink = ({ title, path, disabled }: IRoute) => (
    <NavigationLink key={title} to={path} onClick={handleClose} activeClassName="selected">
      {title}
    </NavigationLink>
  );

  return <>{Routes.map(renderLink)}</>;
};
