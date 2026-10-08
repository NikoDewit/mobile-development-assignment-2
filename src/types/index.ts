//circle in stories row on Home page
export interface Story {
  id: string;
  username: string;
  avatarUrl: string;
}

//comment shown under post
export interface Comment {
  id: string;
  username: string;
  text: string;
}

//post: the photo, who posted it, and everything shown beneath it
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

//row in messages list
export interface Conversation {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  timeAgo: string;
}

//tile in the Search page image grid
export interface GridImage {
  id: string;
  imageUrl: string;
}
