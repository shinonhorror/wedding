import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';

const container = document.getElementById('root') as HTMLElement;

const initialChildren = (
  <StrictMode>
    <div style={{ fontFamily: 'Lena', fontSize: '24px' }}>Hello!</div>
  </StrictMode>
);

const root = createRoot(container);
root.render(initialChildren);
