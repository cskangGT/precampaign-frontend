import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcceptedApplicantsList from './pages/AcceptedApplicantsList/AcceptedApplicantsList';
import Applicantslist from './pages/Applicantslist/Applicantslist';
import Login from './pages/Login/Login';
import CampaignList from './pages/CampaignList/CampaignList';
import AllAcceptedApplicantsList from './pages/AllAcceptedApplicantsList/AllAcceptedApplicantsList';

function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/applicantslist" element={<Applicantslist />} />
          <Route path="/campaigns/:campaignId" element={<Applicantslist />} />
          <Route path="/accepted-applicants-list" element={<AcceptedApplicantsList />} />
          <Route path="/all-accepted-applicants-list" element={<AllAcceptedApplicantsList />} />
          <Route path="/campaigns" element={<CampaignList />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default Router;
