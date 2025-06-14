import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';
import 'swiper/css';
import { GlobalStyle } from './styled-components-config';
import Layout from './components/entities/layout';
import Main from './pages/main';

const preloader = document.createElement('div');
preloader.id = 'preloader';
preloader.innerHTML = `
  <div class="loader"></div>
`;
document.body.appendChild(preloader);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const delayBeforeRender = 1500;
const fadeOutDuration = 300;

setTimeout(() => {
  const preloaderEl = document.getElementById('preloader');
  if (preloaderEl) {
    preloaderEl.classList.add('hidden');

    setTimeout(() => {
      if (preloaderEl && preloaderEl.parentNode) {
        preloaderEl.parentNode.removeChild(preloaderEl);
      }

      root.render(
        <StrictMode>
          <GlobalStyle />
          <Layout>
            <Main />
          </Layout>
        </StrictMode>
      );
    }, fadeOutDuration);
  }
}, delayBeforeRender);
