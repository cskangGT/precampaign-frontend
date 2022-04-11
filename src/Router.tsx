import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcceptedApplicantsList from './pages/AcceptedApplicantsList/AcceptedApplicantsList';
import Login from './pages/Login/Login';
import CampaignList from './pages/CampaignList/CampaignList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accepted-applicants-list" element={<AcceptedApplicantsList />} />
        <Route path="/campaigns" element={<CampaignList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
