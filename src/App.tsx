import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import ActiveCampaignPage from "./components/activeCampaignPage/ActiveCampaignPage";
import { CardDetails } from "./components/card/CardDetails";
import {InterfaceACPage} from "./components/InterfaceACPage/InterfaceACPage ";
import ContactsMenu from "./components/contactsMenu/ContactsMenu";
import {Campaigns} from "./components/сampaigns/Campaigns";
import Automations from "./components/automations/Automations";
import Deals from "./components/deals/Deals";
import Website from "./components/website/Website";
import Reports from "./components/reports/Reports";
import UnlockFeatures from "./components/unlockFeatures/UnlockFeatures";
import GetHelp from "./components/getHelp/GetHelp";
import AppsModule from "./components/apps/AppsModule";
import SettingsModule from "./components/settingsModule/SettingsModule";
import ContactsModuleD from "./components/contactsMenu/contactsModuleD/ContactsModuleD";
import AccountsModuleD from "./components/contactsMenu/accountsModuleD/AccountsModuleD";
import Lists from "./components/contactsMenu/lists/Lists";
import Segments from "./components/contactsMenu/segments/Segments";
import Tags from "./components/contactsMenu/tags/Tags";
import Fields from "./components/contactsMenu/fields/Fields";
import ManageScoring from "./components/contactsMenu/manageScoring/ManageScoring";
import ManageExclusions from "./components/contactsMenu/manageExclusions/ManageExclusions";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/activecampaign-page" element={<ActiveCampaignPage />} />
                <Route path="/card" element={<CardDetails />} />
                <Route path="/interfaceAC" element={<InterfaceACPage />} />
                <Route path="/сontacts-menu" element={< ContactsMenu/>} />
                <Route path="/campaigns-menu" element={<Campaigns/>} />
                <Route path="/automations-menu" element={<Automations />} />
                <Route path="/deals-menu" element={<Deals />} />
                <Route path="/website-menu" element={<Website />} />
                <Route path="/reports-menu" element={<Reports />} />
                <Route path="/unlockFeatures-menu" element={<UnlockFeatures />} />
                <Route path="/get-help-menu" element={<GetHelp />} />
                <Route path="/apps-menu" element={<AppsModule />} />
                <Route path="/settings-menu" element={<SettingsModule />} />
                <Route path="/сontacts" element={<ContactsModuleD />} />
                <Route path="/сontacts-accounts" element={<AccountsModuleD/>} />
                <Route path="/сontacts-lists" element={<Lists/>} />
                <Route path="/сontacts-Segments" element={<Segments/>} />
                <Route path="/сontacts-tags" element={<Tags/>} />
                <Route path="/сontacts-fields" element={<Fields/>} />
                <Route path="/сontacts-manage-scoring" element={<ManageScoring/>} />
                <Route path="/сontacts-manage-exclusions" element={<ManageExclusions/>} />
            </Routes>
        </HashRouter>
    );
};

export default App;
