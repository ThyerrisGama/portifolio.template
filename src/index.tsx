import React from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './templates/Home';


const container: any = document.getElementById('app');
const root = createRoot(container); 
root.render(
  <>
    <Home/>
  </>
)