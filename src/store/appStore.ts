import { create } from 'zustand';

interface AppState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  isOffline: boolean;
  setOfflineStatus: (status: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  isOffline: !navigator.onLine,
  setOfflineStatus: (status) => set({ isOffline: status })
}));
