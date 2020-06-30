import * as React from 'react';
import { Helmet } from 'react-helmet';
import { HomeRoute } from '../Routing';

export interface IProps {
  title?: string;
}

const PageTitle: React.FC<IProps> = ({ title }) => {
  const defaultTitle = 'Kazakh Classic';
  const routeTitle = title === HomeRoute.title ? '' : title;
  const completeTitle = routeTitle ? `${routeTitle} | ${defaultTitle}` : defaultTitle;
  return (
    <Helmet>
      <title>{completeTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
