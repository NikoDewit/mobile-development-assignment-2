import Avatar from "@/components/ui/Avatar";
import { colors, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface PostHeaderProps {
  username: string;
  avatarUrl: string;
}

export default function PostHeader({ username, avatarUrl }: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <Avatar uri={avatarUrl} size={34} hasStoryRing />
      <Text style={styles.username}>{username}</Text>
      <Ionicons name="ellipsis-vertical" size={18} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  username: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: 15,
    color: colors.text,
  },
});
