import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcceptedApplicantsList from './pages/AcceptedApplicantsList/AcceptedApplicantsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accepted-applicants-list" element={<AcceptedApplicantsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
