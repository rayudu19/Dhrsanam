import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PersonalDetails from './components/PersonalDetails';
import Error from './pages/Error';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
