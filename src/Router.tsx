import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
