import { v4 as uuidv4 } from "uuid";

export const generateSampleNotifications = () => {
  return [
    {
      id: uuidv4(),
      message: "New mission request #MR-2024-001 has been assigned to you",
      timestamp: new Date(),
      read: false,
    },
    {
      id: uuidv4(),
      message: "Your request for equipment upgrade has been approved",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false,
    },
    {
      id: uuidv4(),
      message: "Team meeting scheduled for tomorrow at 10:00 AM",
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      read: true,
    },
    {
      id: uuidv4(),
      message: "Mission report #MR-2024-000 has been submitted for review",
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      read: true,
    },
  ];
};
