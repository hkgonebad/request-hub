import { create } from "zustand";
import { generateSampleNotifications } from "@/utils/notificationUtils";

interface Notification {
  id: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatar: string;
  lastActive: Date;
}

interface UserState {
  profile: UserProfile;
  notifications: Notification[];
  unreadCount: number;
  setProfile: (profile: UserProfile) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
}

const useUserStore = create<UserState>((set) => ({
  profile: {
    id: "1",
    name: "Tony Stark",
    email: "tony.stark@starkenterprises.com",
    role: "Genius",
    department: "Research and Development",
    avatar: "src/assets/img/user.jpg",
    lastActive: new Date(),
  },
  notifications: generateSampleNotifications(),
  unreadCount: 2,
  setProfile: (profile) => set({ profile }),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    })),
  markNotificationAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
      unreadCount: Math.max(0, state.unreadCount - 1),
    })),
  clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
}));

export default useUserStore;
