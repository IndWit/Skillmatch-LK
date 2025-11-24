import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import ProjectDetail from './Pages/Projects/ProjectDetail.jsx';
import ProjectForm from './Pages/Projects/ProjectForm.jsx';


function App() {
  return (
    <Routes>
  <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/projects/:slug" element={<ProjectDetail />} />
  <Route path="/project/create" element={<ProjectForm />} />
    </Routes>
  );
}

export default App;