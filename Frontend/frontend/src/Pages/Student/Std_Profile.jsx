// src/Pages/Profile.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 pb-6">
          <Link
            className="text-[#4c669a] dark:text-slate-400 text-sm font-medium leading-normal hover:underline"
            to="/home"
          >
            Home
          </Link>
          <span className="text-[#4c669a] dark:text-slate-500 text-sm font-medium leading-normal">/</span>
          <Link
            className="text-[#4c669a] dark:text-slate-400 text-sm font-medium leading-normal hover:underline"
            to="/profiles"
          >
            Profiles
          </Link>
          <span className="text-[#4c669a] dark:text-slate-500 text-sm font-medium leading-normal">/</span>
          <span className="text-[#0d121b] dark:text-slate-200 text-sm font-medium leading-normal">
            Amelia Carter
          </span>
        </div>
        
        {/* Profile Header */}
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex w-full flex-col gap-6 @container md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 flex-shrink-0 md:h-28 md:w-28"
                data-alt="Profile picture of Amelia Carter"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4uMy2DYo9V6uO1NCSzm4sWFKu01PVt5lR4SzN33__1scR7kU8buLI_kbRCr_u3z2MhwOOaky1kv-t2iI4Syi25juMXVXGFZSCpqJeYjEoe3dZskIhbJbUQG70ifw5hvncCjasgrJGCGxiEhcAMOeJTcCnIn5aAZtJIX-YWeSpWYiQ8fCWMOmsyD-aCKyJMe0oGC58bITj7aMJ8Wnqhfdu4yXqRGZT4_Weh6I9qPIhFhJ7SZi4nmls7hM4EhwtOTpzNO3HxFEqTcQ")' }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d121b] dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">
                  Amelia Carter
                </p>
                <p className="text-[#4c669a] dark:text-slate-400 text-base font-normal leading-normal mt-1">
                  University of Colombo School of Computing
                </p>
                <p className="text-[#4c669a] dark:text-slate-400 text-base font-normal leading-normal">
                  B.Sc. in Computer Science
                </p>
              </div>
            </div>
            <div className="flex w-full max-w-sm gap-3 @[480px]:w-auto">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 text-[#0d121b] text-sm font-bold leading-normal tracking-wide flex-1 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 @[480px]:flex-auto">
                <span className="truncate">Connect</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide flex-1 hover:bg-primary/90 @[480px]:flex-auto">
                <span className="truncate">Message</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-8 w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-[#0d121b] dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3 pt-4">
            {/* These are just sample skills from your screenshot */}
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 dark:bg-primary/30">
              <p className="text-primary text-sm font-medium leading-normal">Java</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 dark:bg-primary/30">
              <p className="text-primary text-sm font-medium leading-normal">UI/UX Design</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 dark:bg-primary/30">
              <p className="text-primary text-sm font-medium leading-normal">Project Management</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 dark:bg-primary/30">
              <p className="text-primary text-sm font-medium leading-normal">React</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 dark:bg-primary/30">
              <p className="text-primary text-sm font-medium leading-normal">Node.js</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 dark:bg-primary/30">
              <p className="text-primary text-sm font-medium leading-normal">SQL</p>
            </div>
          </div>
        </div>
        
        {/* Projects Joined Section */}
        <div className="mt-8">
          <h2 className="text-[#0d121b] dark:text-slate-100 text-xl font-bold leading-tight tracking-tight px-2 pb-4">
            Projects Joined
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Project Card 1 */}
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="text-lg font-bold text-[#0d121b] dark:text-slate-100">
                Campus Event Planner App
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">Role: Lead UI/UX Designer</p>
              <p className="mt-3 text-base text-[#4c669a] dark:text-slate-400">
                A mobile application designed to streamline event discovery and management for university
                students. Focused on creating an intuitive and engaging user interface.
              </p>
              <Link className="mt-4 text-sm font-bold text-primary hover:underline" to="/project/1">
                View Project →
              </Link>
            </div>
            {/* Project Card 2 */}
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="text-lg font-bold text-[#0d121b] dark:text-slate-100">
                Alumni Networking Platform
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">Role: React Developer</p>
              <p className="mt-3 text-base text-[#4c669a] dark:text-slate-400">
                Developed key front-end components for a web platform connecting current students with
                university alumni for mentorship and career opportunities.
              </p>
              <Link className="mt-4 text-sm font-bold text-primary hover:underline" to="/project/2">
                View Project →
              </Link>
            </div>
            {/* Project Card 3 */}
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="text-lg font-bold text-[#0d121b] dark:text-slate-100">
                Research Paper Repository
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">Role: Project Manager</p>
              <p className="mt-3 text-base text-[#4c669a] dark:text-slate-400">
                Led a team of four to create a digital archive for academic papers. Responsible for
                timeline management, task delegation, and ensuring project milestones were met.
              </p>
              <Link className="mt-4 text-sm font-bold text-primary hover:underline" to="/project/3">
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;