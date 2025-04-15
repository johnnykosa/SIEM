/*import { useState } from 'react'
import arrowLogo from './assets/arrow_logo.svg'
import logoDark from './assets/logo_dark.png'
import logoLight from './assets/logo_light.png'*/

import { Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/OverviewPage.jsx";
import ThreatPage from "./pages/ThreatPage.jsx";

import Sidebar from "./components/Sidebar.jsx";

function App() {
    return (
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

            {/* BACKGROUND */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
                <div className="absolute inset-0 backdrop-blur-sm"/>
            </div>

            <Sidebar />
            {/* PAGE ROUTES */}
            <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="/threats" element={<ThreatPage />} />
            </Routes>

        </div>
    )
}

export default App;