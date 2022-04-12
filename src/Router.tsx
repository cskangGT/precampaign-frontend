import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import AcceptedApplicantsList from './pages/AcceptedApplicantsList/AcceptedApplicantsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="acceptedapplicantslist" element={<AcceptedApplicantsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
