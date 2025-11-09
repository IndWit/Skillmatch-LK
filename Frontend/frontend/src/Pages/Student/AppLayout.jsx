// src/components/AppLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="relative flex min-h-screen w-full font-display bg-background-light dark:bg-background-dark">
      <Sidebar />
      
      {/* Outlet renders the current child route (e.g., Profile, Home, Settings) */}
      <Outlet />
    </div>
  );
}

export default AppLayout;