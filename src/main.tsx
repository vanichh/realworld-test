import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const rootHTML = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootHTML).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
