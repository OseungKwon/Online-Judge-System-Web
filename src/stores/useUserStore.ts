import { create } from 'zustand';

import { User } from '@/services/apis';

// store 타입 (안해주면 에러날 수도 있음!! 타입 정의 꼭 해주기!!)
interface UseActiveStoreInterface extends Partial<User> {
  setUser: (user: Partial<User>) => void;
}

const useUserStore = create<UseActiveStoreInterface>((set) => ({
  id: undefined,
  email: undefined,
  nickname: undefined,
  setUser: (user: Partial<User>) =>
    set(() => ({
      id: user.id,
      email: user.email,
      nickname: user.nickname,
    })),
}));

export default useUserStore;
