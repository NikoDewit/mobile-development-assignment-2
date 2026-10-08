import PostCard from "@/components/feed/PostCard";
import StoriesRow from "@/components/feed/StoriesRow";
import { colors, spacing } from "@/constants/theme";
import { mockPosts, mockStories } from "@/data/mockPosts";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//same file as page: used once
function HomeHeader() {
  //useRouter used for navigation
  const router = useRouter();
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.headerIcons}>
        <Ionicons name="heart-outline" size={26} color={colors.text} />

        {/* Tapping the messenger icon pushes the Messages stack screen */}
        <Pressable
          onPress={() => router.push("/messages")}
          hitSlop={8}
          style={styles.messageButton}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={26}
            color={colors.text}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    // edges={['top']}: the tab bar already handles the bottom edge.
    <SafeAreaView style={styles.container} edges={["top"]}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoriesRow stories={mockStories} />
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  logo: {
    fontSize: 30,
    color: colors.text,
    fontWeight: "700",
  },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  messageButton: { marginLeft: spacing.lg },
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.like,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "700" },
});
