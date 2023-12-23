import './App.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from '@/pages/login/Login.page';
import ProfilePage from '@/pages/profile/Profile.page.tsx';
import { fetchGetUserProfile } from '@/services/apis';
import useAuthStore from '@/stores/useAuthStore.ts';
import useUserStore from '@/stores/useUserStore.ts';
import { RoutePath } from '@/values';

import { Header } from './components';

function PrivateRouteWrapper() {
  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const accessToken = useAuthStore((state) => state.accessToken);

  const reload = useCallback(async () => {
    try {
      const response = await fetchGetUserProfile();
      const responseData = response.responseData;

      setUser({
        id: responseData.id,
        nickname: responseData.nickname,
        email: responseData.email,
      });
      setIsAuth(true);
    } catch (error) {
      setIsAuth(false);
    }
  }, [setUser]);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else {
      if (!isAuth) {
        void reload();
        return;
      }
    }
  }, [navigate, accessToken, isAuth, reload]);

  if (!accessToken) {
    return <></>;
  }
  return <Outlet />;
}

function App() {
  const MINUTE = 1000 * 60;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { gcTime: 10 * MINUTE, retry: 0 },
      mutations: { gcTime: 10 * MINUTE, retry: 0 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<></>}>
        <Header />
        <main>
          <Router>
            <Routes>
              <Route path={RoutePath.LOGIN} element={<LoginPage />} />
              <Route element={<PrivateRouteWrapper />}>
                <Route path={RoutePath.PROFILE} element={<ProfilePage />}></Route>
              </Route>
            </Routes>
          </Router>
        </main>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
