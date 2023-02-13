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
        <Route path='/react-recipes/' element={<Home />} />
        <Route path='/react-recipes/redux' element={<AppForRedux />} />
        <Route path='/react-recipes/context' element={<AppForContext />} />
        <Route path='/react-recipes/suspense' element={<AppForSuspense />} />
        <Route path='/react-recipes/performance' element={<AppForPerformance />} />
        <Route path='/react-recipes/testing' element={<AppForTesting />} />
        <Route path="/react-recipes/*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);
