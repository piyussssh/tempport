
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Admin from './pages/admin';
import './index.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import { Route } from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
    <Routes>

    <Route path="/admin" element={<Admin />} />
    </Routes>

  </Router>
);