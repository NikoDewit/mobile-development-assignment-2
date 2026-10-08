import PostCard from "@/components/feed/PostCard";
import { colors, spacing } from "@/constants/theme";
import { mockPosts } from "@/data/mockPosts";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//same file as page: used once
function ProfileHeader({ username }: { username: string }) {
  return (
    <View style={styles.header}>
      <Text style={styles.subtitle}>{username.toUpperCase()}</Text>
      <Text style={styles.title}>Posts</Text>
    </View>
  );
}

export default function ProfileScreen() {
  //show the third mock post to match the posts screenshot
  const post = mockPosts[2];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader username={post.username} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PostCard post={post} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    alignItems: "center",
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  subtitle: { fontSize: 12, color: colors.textSecondary },
  title: { fontSize: 17, fontWeight: "700", color: colors.text },
});
