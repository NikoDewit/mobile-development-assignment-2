import { Post, Story } from "@/types";

//returns a random image at specified size
const img = (seed: string, size = 600) =>
  `https://picsum.photos/seed/${seed}/${size}/${size}`;

export const mockStories: Story[] = [
  { id: "s0", username: "your story", avatarUrl: img("me", 150) },
  { id: "s1", username: "Caelan_Abugan", avatarUrl: img("story1", 150) },
  { id: "s2", username: "Daniel.Carpintero", avatarUrl: img("story2", 150) },
  { id: "s3", username: "Doug_Dickens", avatarUrl: img("story3", 150) },
  { id: "s4", username: "Maximum", avatarUrl: img("story4", 150) },
];

export const mockPosts: Post[] = [
  {
    id: "1",
    username: "Caelan_Abugan",
    avatarUrl: img("avatar1", 100),
    imageUrl: img("post1"),
    likes: 10547,
    caption: "Fresh shot on a sunny day!",
    commentCount: 12,
    comments: [
      { id: "c1", username: "lil_wyatt838", text: "Awesome tones" },
      { id: "c2", username: "pia.in.a.pod", text: "Gorg. Love it!" },
    ],
    timeAgo: "1 day ago",
    isLiked: true,
  },
  {
    id: "2",
    username: "Daniel.Carpintero",
    avatarUrl: img("avatar2", 100),
    imageUrl: img("post2"),
    likes: 2381,
    caption: "Golden hour never disappoints",
    commentCount: 5,
    comments: [{ id: "c3", username: "paisley.print.48", text: "Beautiful!" }],
    timeAgo: "3 hours ago",
    isLiked: false,
  },
  {
    id: "3",
    username: "Doug_Dickens",
    avatarUrl: img("avatar3", 100),
    imageUrl: img("post3"),
    likes: 842,
    caption: "Looking up never gets old",
    commentCount: 2,
    comments: [{ id: "c4", username: "astro.kid", text: "Incredible view" }],
    timeAgo: "2 days ago",
    isLiked: false,
  },
];

// Extra images for the Search grid (each one opens a post)
export const mockGridImages: { id: string; imageUrl: string }[] = Array.from(
  { length: 18 },
  (_, i) => ({ id: String((i % 3) + 1), imageUrl: img(`grid${i}`, 400) }),
);
