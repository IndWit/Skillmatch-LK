import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Keep this for SPA routing

function Register() {
  // State to hold all form data in one object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student', // Default value from screenshot
    educationLevel: 'High School', // Default value from screenshot
    organization: '',
  });

  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Single handler to update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    // Example: check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // In a real app, you'd send formData to your Go backend here
  };

  // Re-using styles from your login page for consistency
  const inputClasses = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111827] dark:text-white dark:placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#D1D5DB] dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 placeholder:text-[#6B7280] px-4 text-base font-normal leading-normal";
  const labelClasses = "text-[#111827] dark:text-white text-sm font-medium leading-normal pb-2";

  return (
    <div className="relative flex h-auto min-h-screen w-full bg-background-light dark:bg-background-dark" style={{ fontFamily: '"Inter", "Noto Sans", sans-serif' }}>
      <div className="flex w-full max-w-7xl mx-auto flex-1">
        
        {/* --- Left Column (Branding) --- */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12">
          {/* Logo */}
          <div>
            <Link className="flex items-center gap-2 text-xl font-bold text-[#111827] dark:text-white" to="/">
              {/* You can replace this span with your actual logo SVG or <img> */}
              <span className="material-symbols-outlined text-3xl text-primary">hexagon</span>
              SkillMatch LK
            </Link>
          </div>

          {/* Middle Content */}
          <div className="flex flex-col items-center justify-center flex-1 -mt-16">
            {/* UPDATED IMAGE URL */}
            <img 
              src="https://images.unsplash.com/photo-1543286386-71f4340d8699?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="An abstract illustration representing career growth and professional networking, with stylized human figures and interconnected nodes." 
              className="w-full max-w-sm rounded-lg shadow-md"
            />
            <h1 className="text-4xl font-bold text-[#1F2937] dark:text-white mt-8 text-center">
              Connecting Talent with Opportunity.
            </h1>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#6B7280] dark:text-gray-400">
            © 2024 SkillMatch LK. All rights reserved.
          </p>
        </div>

        {/* --- Right Column (Form) --- */}
        <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:w-1/2">
          <div className="w-full max-w-md mx-auto">
            <div className="space-y-6">
              <div>
                <h1 className="text-[#111827] dark:text-white tracking-tight text-3xl font-bold leading-tight text-left">
                  Create an Account
                </h1>
                <p className="text-[#6B7280] dark:text-gray-400 text-base font-normal leading-normal pt-2">
                  Join SkillMatch LK to get started
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="password">Password</label>
                  <div className="relative flex w-full items-center">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`${inputClasses} pr-10`} // Add padding for the icon
                      required
                    />
                    <button 
                      aria-label="Toggle password visibility" 
                      className="absolute right-3 text-[#6B7280] dark:text-gray-400" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="confirmPassword">Confirm Password</label>
                  <div className="relative flex w-full items-center">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`${inputClasses} pr-10`} // Add padding for the icon
                      required
                    />
                    <button 
                      aria-label="Toggle password visibility" 
                      className="absolute right-3 text-[#6B7280] dark:text-gray-400" 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {showConfirmPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Role */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="role">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={inputClasses} // Re-using input classes for <select>
                  >
                    <option>Student</option>
                    <option>Organization</option>
                    <option>Community Member</option>
                  </select>
                </div>
                
                {/* Education Level */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="educationLevel">Education Level</label>
                  <select
                    id="educationLevel"
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className={inputClasses} // Re-using input classes for <select>
                  >
                    <option>High School</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Postgraduate</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* University / Organization */}
                <div className="flex flex-col">
                  <label className={labelClasses} htmlFor="organization">University / Organization</label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Enter your university or organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" 
                  type="submit"
                >
                  Register
                </button>
              </form>

              {/* Footer Links */}
              <p className="text-center text-sm text-[#6B7280] dark:text-gray-400">
                Already have an account?{' '}
                <Link className="font-medium text-primary hover:underline" to="/login">Login</Link>
              </p>
              <p className="text-center text-xs text-[#6B7280] dark:text-gray-400">
                By registering, you agree to our <a className="font-medium text-primary hover:underline" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;