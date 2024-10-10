import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UnknownPath from './components/errors/UnknownPath';
import NewTask from './components/NewTask';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <UnknownPath />,
    children: [
      {
        path: "new",
        element: <NewTask />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
