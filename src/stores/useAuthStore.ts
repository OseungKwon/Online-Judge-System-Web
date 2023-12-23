import { create } from 'zustand';

interface UseActiveStoreInterface {
  accessToken?: string | null;
  setAccessToken: (accessTokenData: string) => void;
}

const useAuthStore = create<UseActiveStoreInterface>((set) => ({
  accessToken: sessionStorage.getItem('accessToken'),
  setAccessToken: (accessTokenData: string) => {
    sessionStorage.setItem('accessToken', accessTokenData);
    set(() => ({
      accessToken: accessTokenData,
    }));
  },
}));

export default useAuthStore;
