import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllAcceptedApplicantsList from './pages/AllAcceptedApplicantsList/AllAcceptedApplicantsList';
import Login from './pages/Login';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/all-accepted-applicants-list" element={<AllAcceptedApplicantsList />} />
        <Route path="/" element={<Login />} />
        <Route path="/accepted-applicants-list" element={<AcceptedApplicantsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
