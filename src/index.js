import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { AdminStore } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={AdminStore}>

  <Route>

    <App />
</Route>
  </Provider>
);


