import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login/Login.page';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<></>}>
        <Router>
          <Routes>
            <Route path={'/login'} element={<LoginPage />} />
          </Routes>
        </Router>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
