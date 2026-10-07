import { colors, spacing } from "@/constants/theme";
import { Post } from "@/types";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PostActions from "./PostActions";
import PostHeader from "./PostHeader";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { width } = useWindowDimensions();
  const [isLiked, setIsLiked] = useState(post.isLiked);

  // Keep the like count in sync with the heart
  const likes = post.likes + (isLiked ? 1 : 0) - (post.isLiked ? 1 : 0);

  return (
    <View style={styles.container}>
      <PostHeader username={post.username} avatarUrl={post.avatarUrl} />

      <Image
        source={{ uri: post.imageUrl }}
        style={{
          width,
          height: width,
          backgroundColor: colors.inputBackground,
        }}
      />

      <PostActions
        isLiked={isLiked}
        onToggleLike={() => setIsLiked((prev) => !prev)}
      />

      <View style={styles.details}>
        <Text style={styles.likes}>{likes} Likes</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.username} </Text>
          {post.caption}
        </Text>
        {post.commentCount > 0 && (
          <Text style={styles.muted}>
            View all {post.commentCount} comments
          </Text>
        )}
        {post.comments.map((c) => (
          <Text key={c.id} style={styles.text}>
            <Text style={styles.bold}>{c.username} </Text>
            {c.text}
          </Text>
        ))}
        <Text style={styles.time}>{post.timeAgo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background, marginBottom: spacing.sm },
  details: { paddingHorizontal: spacing.md, paddingBottom: spacing.sm, gap: 3 },
  likes: { fontWeight: "700", fontSize: 14, color: colors.text },
  text: { fontSize: 14, color: colors.text },
  bold: { fontWeight: "700" },
  muted: { fontSize: 14, color: colors.textSecondary },
  time: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
});
