import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import AppForContext from './AppForContext';
import AppForPerformance from './AppForPerformance';
import AppForRedux from './AppForRedux';
import AppForTesting from './AppForTesting';
import NotFound from './NotFound';
import './index.scss';
import AppForSuspense from './AppForSuspense';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <main className='mt-12 max-w-[84rem] mx-auto px-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/redux' element={<AppForRedux />} />
        <Route path='/context' element={<AppForContext />} />
        <Route path='/suspense' element={<AppForSuspense />} />
        <Route path='/performance' element={<AppForPerformance />} />
        <Route path='/testing' element={<AppForTesting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);
