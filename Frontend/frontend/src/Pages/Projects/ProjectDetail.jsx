import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Badge({ children }) {
  return <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{children}</span>;
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <div className="mt-3 text-sm text-gray-600">{children}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug = 'ui-ux-redesign-for-ecommerce' } = useParams();

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Lexend, Inter, sans-serif' }}>
      {/* Top bar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-gray-900">
          <span className="h-6 w-6 rounded-full bg-primary inline-block" />
          SkillMatch LK
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-primary" href="#">Dashboard</a>
          <a className="hover:text-primary" href="/">Projects</a>
          <a className="hover:text-primary" href="#">Profile</a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">Projects</Link>
          <span>/</span>
          <span className="text-gray-700">UI/UX Redesign for E-commerce</span>
        </div>

        {/* Title & meta */}
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">UI/UX Redesign for E-commerce Platform</h1>
        <p className="mt-2 text-gray-600">
          Crafting a modern, intuitive, and high-converting user experience.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button aria-label="save" className="rounded-full border border-gray-300 bg-white p-2 hover:text-primary">
            <span className="material-symbols-outlined text-base">bookmark</span>
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm hover:border-primary hover:text-primary">
            <span className="material-symbols-outlined text-base">chat</span>
            Chat with Org
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Web Development</Badge>
          <Badge>UI/UX</Badge>
          <Badge>3-Month Contract</Badge>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90">
            <span className="material-symbols-outlined text-base">person_add</span>
            Apply Individually
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary">
            <span className="material-symbols-outlined text-base">group_add</span>
            Apply as Team
          </button>
        </div>

        {/* Tabs (static) */}
        <div className="mt-8 border-b">
          <div className="flex gap-6 text-sm">
            <button className="border-b-2 border-primary px-1 py-3 font-semibold text-primary">Overview</button>
            <button className="px-1 py-3 text-gray-600">Requirements</button>
            <button className="px-1 py-3 text-gray-600">Team</button>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-gray-900">Project Summary</h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              We are seeking a talented UI/UX designer to lead the complete redesign of our e-commerce platform.
              The goal is to create a visually appealing, user-friendly, and conversion-optimized experience for our
              customers. This project involves everything from initial user research and wireframing to final high-
              fidelity mockups and prototyping. The ideal candidate will have a strong portfolio of e-commerce
              projects and a deep understanding of modern design principles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card title="Project Goals">
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-green-600">check_circle</span> Increase user engagement by 20%.</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-green-600">check_circle</span> Improve conversion rate by 15%.</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-green-600">check_circle</span> Enhance mobile shopping experience.</li>
              </ul>
            </Card>
            <Card title="Timeline & Duration">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">event</span> Start Date: August 1, 2024</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">schedule</span> Duration: 3 Months</div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
