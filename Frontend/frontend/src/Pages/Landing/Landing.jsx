import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['All Categories', 'Tech', 'Education', 'Agriculture', 'Health', 'Environment'];

const projects = [
  { title: 'AI-Powered Crop Monitoring', slug: 'ai-powered-crop-monitoring', org: 'AgriCorp', tags: ['Tech'], duration: '6 Months' },
  { title: 'Literacy Program for Rural Children', slug: 'literacy-program-rural-children', org: 'EduFuture Foundation', tags: ['Education'], duration: '12 Months' },
  { title: 'Sustainable Farming Initiative', slug: 'sustainable-farming-initiative', org: 'GreenLeaf Org', tags: ['Agriculture'], duration: '9 Months' },
  { title: 'Telemedicine Platform Development', slug: 'telemedicine-platform-development', org: 'HealthTech Solutions', tags: ['Health'], duration: '8 Months' },
  { title: 'Urban Green Space Project', slug: 'urban-green-space-project', org: 'City Bloom', tags: ['Environment'], duration: '4 Months' },
  { title: 'Fintech App for Micro-loans', slug: 'fintech-app-micro-loans', org: 'Innovate Finance', tags: ['Tech'], duration: '5 Months' },
];

function Placeholder() {
  return (
    <div className="h-48 w-full rounded-lg bg-gray-100 grid place-items-center">
      <span className="material-symbols-outlined text-gray-400 text-4xl">image</span>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" style={{ fontFamily: 'Lexend, Inter, sans-serif' }}>
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-extrabold">
          <span className="h-6 w-6 rounded-full bg-primary inline-block" />
          SkillMatch LK
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-primary" href="#">Home</a>
          <a className="hover:text-primary" href="#">About</a>
          <a className="hover:text-primary" href="#projects">Projects</a>
          <a className="hover:text-primary" href="#">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="rounded-lg px-4 py-2 text-sm font-semibold hover:text-primary">Log In</Link>
          <Link to="/register" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90">Sign Up</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl leading-tight">
          Connect Your Skills,
          <br className="hidden sm:block" />
          <span className="mt-2 inline-block">Create an Impact.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
          Discover meaningful projects across Sri Lanka where your expertise can drive real change.
          Join a community of innovators and volunteers today.
        </p>
        <div className="mt-6">
          <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
            Explore Projects
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold">Featured Projects</h2>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`rounded-full border px-4 py-1 text-sm ${i === 0 ? 'bg-primary text-white border-primary' : 'border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <Placeholder />
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-gray-500">by {p.org}</p>
              <div className="mt-3 flex items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</span>
                ))}
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{p.duration}</span>
              </div>
              <div className="mt-4">
                <Link to={`/projects/${p.slug}`} className="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary/90">Apply Now</Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-1">
          {[1,2,3,'…',8,9,10].map((n, idx) => (
            <button
              key={idx}
              className={`h-8 w-8 rounded-md text-sm font-medium ${n===1 ? 'bg-primary text-white' : 'bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary'}`}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <span className="h-6 w-6 rounded-full bg-primary inline-block" />
              SkillMatch LK
            </div>
            <p className="mt-3 text-sm text-gray-600">Connecting skills with opportunities for a better Sri Lanka.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:text-primary" href="#projects">Projects</a></li>
              <li><Link className="hover:text-primary" to="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-primary" to="/register">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Follow Us</h4>
            <div className="mt-3 flex items-center gap-3 text-primary">
              <a href="#" aria-label="Twitter" className="hover:opacity-80">X</a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80">f</a>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500">© 2024 SkillMatch LK. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Landing;
