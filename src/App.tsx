import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/Login.page.tsx';
import React from 'react';

function App() {
  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
