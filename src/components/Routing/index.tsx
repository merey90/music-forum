import React from 'react';
import { Route } from 'react-router-dom';

import { Welcome } from '../../Welcome';
import { MasterClasses } from '../../MasterClasses';
import PageTitle from '../Helmet';

export interface IRoute {
  title: string;
  path: string;
  disabled?: boolean;
  exact?: boolean;
  component: React.FC;
}

export const HomeRoute: IRoute = {
  title: 'Home',
  path: '/home',
  exact: true,
  component: Welcome,
};

export const MasterClassesRoute: IRoute = {
  title: 'MasterClasses',
  path: '/masterclasses',
  component: MasterClasses,
};

export const Routes = [HomeRoute, MasterClassesRoute];

export interface IProps extends IRoute {}

export const Routing: React.FC<IProps> = ({ title, component: Component, path, exact }) => {
  const eComponent = (
    <>
      <PageTitle title={title} />
      <Component />
    </>
  );
  return <Route exact={exact} path={path} key={path} children={eComponent} />;
};
