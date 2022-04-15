import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcceptedApplicantsList from './pages/AcceptedApplicantsList/AcceptedApplicantsList';
import Login from './pages/Login/Login';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accepted-applicants-list" element={<AcceptedApplicantsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
