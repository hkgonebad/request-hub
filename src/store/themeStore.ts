import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;
