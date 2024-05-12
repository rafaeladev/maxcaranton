import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';

import { ContentProvider } from './utils/ContentContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContentProvider>
            <App />
        </ContentProvider>
    </React.StrictMode>
);
