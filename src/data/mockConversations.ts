import { Conversation } from "@/types";

//generate random profile pictures
//same seed means same photo so it isn't changed on every reload
const avatar = (seed: string) => `https://picsum.photos/seed/${seed}/120/120`;

//Data for messages
export const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Daniel.Carpintero",
    avatarUrl: avatar("dm1"),
    lastMessage: "Wazzzzup",
    timeAgo: "6w",
  },
  {
    id: "2",
    name: "Maximum",
    avatarUrl: avatar("dm2"),
    lastMessage: "Active now",
    timeAgo: "",
  },
  {
    id: "3",
    name: "Caelan_Abugan",
    avatarUrl: avatar("dm3"),
    lastMessage: "Hello",
    timeAgo: "20w",
  },
  {
    id: "4",
    name: "Doug_Dickens",
    avatarUrl: avatar("dm4"),
    lastMessage: "Reacted to your story: 😍",
    timeAgo: "22w",
  },
  {
    id: "5",
    name: "Olivia",
    avatarUrl: avatar("dm5"),
    lastMessage: "Liked a message",
    timeAgo: "30w",
  },
];
