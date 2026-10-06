import { colors, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

interface PostActionsProps {
  isLiked: boolean;
  onToggleLike: () => void;
}

export default function PostActions({
  isLiked,
  onToggleLike,
}: PostActionsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={onToggleLike} hitSlop={8}>
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={28}
            color={isLiked ? colors.like : colors.text}
          />
        </Pressable>
        <Ionicons
          name="chatbubble-outline"
          size={26}
          color={colors.text}
          style={styles.icon}
        />
        <Ionicons
          name="paper-plane-outline"
          size={26}
          color={colors.text}
          style={styles.icon}
        />
      </View>
      <Ionicons name="bookmark-outline" size={26} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  left: { flexDirection: "row", alignItems: "center" },
  icon: { marginLeft: spacing.lg },
});
