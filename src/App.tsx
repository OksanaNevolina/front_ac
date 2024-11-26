import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import ActiveCampaignPage from "./components/activeCampaignPage/ActiveCampaignPage";
import { CardDetails } from "./components/card/CardDetails";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/activecampaign-page" element={<ActiveCampaignPage />} />
                <Route path="/card" element={<CardDetails />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
