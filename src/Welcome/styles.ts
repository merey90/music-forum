import styled from 'styled-components';

import backgroundImg from './rusternallee_18_bg.jpg';

export const WelcomeHeader = styled('div')`
  background-image: url(${backgroundImg});
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -${({ theme }) => theme.spacing(8)}px;
`;
