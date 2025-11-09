import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function CreateProjectForm() {
	const [skills, setSkills] = useState(['React', 'Figma']);
	const [currentSkill, setCurrentSkill] = useState('');

	const handleSkillKeyDown = (e) => {
		if (e.key === 'Enter' && currentSkill.trim() !== '') {
			e.preventDefault();
			if (!skills.includes(currentSkill.trim())) {
				setSkills([...skills, currentSkill.trim()]);
			}
			setCurrentSkill('');
		}
	};

	const removeSkill = (skillToRemove) => {
		setSkills(skills.filter((skill) => skill !== skillToRemove));
	};

	return (
		<div className="bg-gray-50 py-12">
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
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create a New Project</h1>
					<p className="mt-4 text-lg text-gray-600">Fill in the details below to post a new project and find the right talent.</p>
				</div>
				<div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex flex-col items-center text-center">
						<p className="text-sm text-gray-600">Short on time? Let our AI draft your project details for you, from title to required skills.</p>
						<button type="button" className="mt-4 inline-flex items-center px-6 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<SparklesIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
							Generate using AI Assistant
						</button>
					</div>
				</div>
				<form className="mt-8 space-y-6">
					<div>
						<label htmlFor="project-title" className="block text-sm font-medium text-gray-700">Project Title</label>
						<div className="mt-1">
							<input type="text" id="project-title" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="e.g., E-commerce Platform Redesign" />
						</div>
					</div>
					<div>
						<label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
						<div className="mt-1">
							<textarea id="description" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Describe the project goals, deliverables, and scope..." />
						</div>
					</div>
					<div>
						<label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
						<div className="mt-1">
							<select id="category" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue="Web Development">
								<option>Web Development</option>
								<option>Mobile Development</option>
								<option>UI/UX Design</option>
								<option>Data Science</option>
							</select>
						</div>
					</div>
					<div>
						<label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills Needed</label>
						<div className="mt-1 flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md shadow-sm">
							{skills.map((skill) => (
								<span key={skill} className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
									{skill}
									<button type="button" onClick={() => removeSkill(skill)} className="ml-1.5 inline-flex flex-shrink-0 text-indigo-400 hover:text-indigo-600">
										<span className="sr-only">Remove {skill}</span>
										<XMarkIcon className="h-4 w-4" />
									</button>
								</span>
							))}
							<input type="text" id="skills" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} onKeyDown={handleSkillKeyDown} className="flex-grow border-none p-1 focus:ring-0 sm:text-sm" placeholder="Add a skill..." />
						</div>
					</div>
					<div>
						<label htmlFor="duration" className="block text-sm font-medium text-gray-700">Estimated Duration</label>
						<div className="mt-1">
							<input type="text" id="duration" disabled className="block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm" placeholder="Generated by AI after description is added" />
						</div>
					</div>
					<div className="flex justify-end">
						<button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create Project</button>
					</div>
				</form>
			</div>
		</div>
	);
}