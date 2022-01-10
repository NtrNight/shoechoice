import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './container/home/home';
import reportWebVitals from './reportWebVitals';
import Home from './container/home/home';
import Detail from './container/detail';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/Home' element={<Home />} />
            <Route path='/Produk/:id/:name' element= { <Detail /> } />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
