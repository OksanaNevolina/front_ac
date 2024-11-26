import { createBrowserRouter } from 'react-router-dom';
import {MainLayout} from "./components/layout/MainLayout";
import ActiveCampaignPage from "./components/activeCampaignPage/ActiveCampaignPage";
import {CardDetails} from "./components/card/CardDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
        ]

    },
    {
        path: 'activecampaign-page',
        element: <ActiveCampaignPage />,
        children:[]

    },
    {
        path: 'card',
        element: <CardDetails/>,
        children:[]

    },
]);
export { router };