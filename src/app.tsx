import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';
import 'swiper/css';
import { GlobalStyle } from './styled-components-config';
import Layout from './components/entities/layout';
import Main from './pages/main';

const container = document.getElementById('root') as HTMLElement;

const initialChildren = (
  <StrictMode>
    <GlobalStyle />
    <Layout>
      <Main />
    </Layout>
  </StrictMode>
);

const root = createRoot(container);
root.render(initialChildren);
