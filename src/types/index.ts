export interface Story {
  id: string;
  username: string;
  avatarUrl: string;
}

export interface Comment {
  id: string;
  username: string;
  text: string;
}

export interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  likes: number;
  caption: string;
  commentCount: number;
  comments: Comment[];
  timeAgo: string;
  isLiked: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  timeAgo: string;
}
