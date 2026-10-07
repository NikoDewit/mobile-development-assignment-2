import Avatar from "@/components/ui/Avatar";
import { colors, spacing } from "@/constants/theme";
import { Conversation } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface ConversationRowProps {
  conversation: Conversation;
}

export default function ConversationRow({
  conversation,
}: ConversationRowProps) {
  const { name, avatarUrl, lastMessage, timeAgo } = conversation;

  return (
    <View style={styles.container}>
      <Avatar uri={avatarUrl} size={56} />

      <View style={styles.textBlock}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.preview} numberOfLines={1}>
          {lastMessage}
          {timeAgo ? ` · ${timeAgo}` : ""}
        </Text>
      </View>

      <Ionicons name="camera-outline" size={28} color={colors.textSecondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
  },
  textBlock: { flex: 1, marginLeft: spacing.md },
  name: { fontSize: 15, color: colors.text },
  preview: { fontSize: 14, color: colors.textSecondary, marginTop: 2 },
});
