import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Top header */}
      <header className="flex h-16 items-center px-6 sm:px-10">
        <a className="text-xl font-bold text-gray-900" href="#">SkillMatch LK</a>
      </header>

      {/* Centered card */}
      <main className="px-4 sm:px-6">
        <div className="mx-auto mt-10 sm:mt-14 w-full max-w-6xl rounded-2xl border border-gray-200 bg-white shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left image */}
            <div className="hidden lg:block">
              <div
                className="h-[420px] w-full rounded-l-2xl bg-cover bg-center"
                role="img"
                aria-label="Abstract network of people illustrating professional connections"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1HWWypsx9gDkxGEkTHNN8r4OwwnxDLuwUfpS2qorO10AjuPfBzJMATOUv0VdIPrYneH75ZU32_vgEViiUZlyaqH8pzSaXjpYbxuxv_kmDmzMeDOI70y0gHvTE21cVJ7sIr0k2zyW_lP-l02vXOMauSx3f4OSovL-lkovorPNHvSqaLxXW5gGISiMb8GhG_fBqw3J5TpF-TVDPqZEKgyGckiMNnnqqBECCcJp9j8issQrjTQ0-6NFLzNlQ2WHTNWVuXbG3-9nVj0s")',
                }}
              />
            </div>

            {/* Right form */}
            <div className="p-8 sm:p-12">
              <div className="max-w-xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h1>
                <p className="pt-2 text-base text-gray-500">Log in to your SkillMatch LK account.</p>

                <form className="mt-8 space-y-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block pb-2 text-sm font-medium text-gray-900">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        mail
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g., yourname@email.com"
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between pb-2">
                      <label htmlFor="password" className="text-sm font-medium text-gray-900">
                        Password
                      </label>
                      <a href="#" className="text-sm font-medium text-primary hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        lock
                      </span>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter your password"
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-10 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Login
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-primary hover:underline">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;