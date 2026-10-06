import { Conversation } from "@/types";

const avatar = (seed: string) => `https://picsum.photos/seed/${seed}/120/120`;

export const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Anastasya Averbukh",
    avatarUrl: avatar("dm1"),
    lastMessage: "hi 😍",
    timeAgo: "6w",
    isUnread: true,
    isActive: false,
  },
  {
    id: "2",
    name: "Charlea N. Henley",
    avatarUrl: avatar("dm2"),
    lastMessage: "Active now",
    timeAgo: "",
    isUnread: false,
    isActive: true,
  },
  {
    id: "3",
    name: "Anastasia",
    avatarUrl: avatar("dm3"),
    lastMessage: "Hello",
    timeAgo: "20w",
    isUnread: false,
    isActive: false,
  },
  {
    id: "4",
    name: "comixzone.co",
    avatarUrl: avatar("dm4"),
    lastMessage: "Reacted to your story: 😍",
    timeAgo: "22w",
    isUnread: false,
    isActive: false,
  },
  {
    id: "5",
    name: "Maria Pia Luce",
    avatarUrl: avatar("dm5"),
    lastMessage: "Splicing glisc",
    timeAgo: "30w",
    isUnread: true,
    isActive: false,
  },
  {
    id: "6",
    name: "honrmndan",
    avatarUrl: avatar("dm6"),
    lastMessage: "Liked a message",
    timeAgo: "30w",
    isUnread: false,
    isActive: false,
  },
];
