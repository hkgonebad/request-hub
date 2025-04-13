import { create } from "zustand";

interface ThemeState {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));

export default useThemeStore;
