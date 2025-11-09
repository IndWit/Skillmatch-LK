// src/components/Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

// Helper component for navigation links
function SidebarLink({ to, icon, label }) {
  const baseClasses = "flex items-center gap-3 rounded-lg px-3 py-2";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${
          isActive
            ? "bg-primary/20 text-primary dark:bg-primary/30"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className={`material-symbols-outlined text-2xl ${
            isActive ? 'fill text-primary' : 'text-[#0d121b] dark:text-slate-300'
          }`}>
            {icon}
          </span>
          <p className={`text-sm font-medium leading-normal ${
            isActive ? 'text-primary' : 'text-[#0d121b] dark:text-slate-300'
          }`}>
            {label}
          </p>
        </>
      )}
    </NavLink>
  );
}

// Main Sidebar component
function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-background-dark">
      <div className="flex items-center gap-3 py-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          data-alt="SkillMatch LK company logo, a stylized letter S"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUDqUHOl1bhU02I3Wf377jextD3O-463IzTQowelbBm2KWehsLs-cGsTcH2I11omvf1MpoJtcUPpaJCu7tBozZnfyz783mWGHIKUro01d41vrosh_xV5aLUNSVhEFihoh8U2jM2WiHJyIVDrlPIHdWcN8VSdf_FXg6qX8nhaGkpssMKq0HjP8bGmxOnisX20vVQZrAVxDM23xwV-QZ0EwJmTFJkbpuXKXRPX1PkQi755mAtSP7ahUwzIve2PHi_VvhGJT-vdnTcFw")' }}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-[#0d121b] dark:text-slate-200 text-base font-bold leading-normal">
            SkillMatch LK
          </h1>
          <p className="text-[#4c669a] dark:text-slate-400 text-sm font-normal leading-normal">
            Web Application
          </p>
        </div>
      </div>
      <nav className="mt-4 flex flex-col gap-2">
        <SidebarLink to="/home" icon="home" label="Home" />
        <SidebarLink to="/search" icon="search" label="Search" />
        <SidebarLink to="/projects" icon="work" label="Projects" />
        <SidebarLink to="/messages" icon="chat_bubble" label="Messages" />
        <SidebarLink to="/profile" icon="person" label="Profile" />
        <SidebarLink to="/settings"icon="settings" label="Settings" />
      </nav>
    </aside>
  );
}

export default Sidebar;