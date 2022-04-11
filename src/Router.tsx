import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import AllAcceptedApplicantsList from './pages/AllAcceptedApplicantsList/AllAcceptedApplicantsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/allacceptedapplicantslist" element={<AllAcceptedApplicantsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
