import { create } from "zustand";

const authStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("revupAccount")) || null,

  // Login
  login: (user) => {
    localStorage.setItem("revupAccount", JSON.stringify(user));
    set({ user });
  },

  // Logout
  logout: () => {
    localStorage.removeItem("revupAccount");
    set({ user: null });
  },
}));

export default authStore;
