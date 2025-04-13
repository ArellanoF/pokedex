import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import appStore from './redux/store';

import { ThemeProvider } from 'styled-components';
import { MainTheme } from './theme/index';

import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <ThemeProvider theme={MainTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
