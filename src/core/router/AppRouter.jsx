import React from 'react'
import { createHashRouter } from "react-router-dom";
import GeneralLayout from '../layouts/GeneralLayout';
import HomeView from '../../pages/home/view/HomeView';
import ServicesView from '../../pages/services/view/ServicesView';
import AboutView from '../../pages/about/view/AboutView';
import ContactView from '../../pages/contact/view/ContactView';
import AppointmentView from '../../pages/appointments/view/AppointmentView';


export const appRouter = createHashRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <HomeView />
            </GeneralLayout>

        ),
    },
    {
        path: "/services",
        element: (
            <GeneralLayout>
                <ServicesView />
            </GeneralLayout>

        ),
    },
    {
        path: "/about",
        element: (
            <GeneralLayout>
                <AboutView />
            </GeneralLayout>

        ),
    },
    {
        path: "/contact",
        element: (
            <GeneralLayout>
                <ContactView />
            </GeneralLayout>

        ),
    },
    {
        path: "/appointment",
        element: (
            <GeneralLayout>
                <AppointmentView />
            </GeneralLayout>

        ),
    },
]);