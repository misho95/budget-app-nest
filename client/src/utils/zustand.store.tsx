import { create } from "zustand";

interface userType {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: number;
  updatedAt: number;
  __v: number;
}

interface userSignedInType {
  user: userType | null;
  setUser: (userData: userType) => void;
  clearUser: () => void;
}

export const userSignedIn = create<userSignedInType>((set) => ({
  user: null,
  setUser: (userData) => set(() => ({ user: userData })),
  clearUser: () => set({ user: null }),
}));

interface tokenStoredType {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const tokenStored = create<tokenStoredType>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token })),
  clearToken: () => set({ token: null }),
}));
