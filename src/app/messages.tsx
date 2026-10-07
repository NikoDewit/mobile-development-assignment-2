import ConversationRow from "@/components/messages/ConversationRow";
import SearchBar from "@/components/ui/SearchBar";
import { colors, spacing } from "@/constants/theme";
import { mockConversations } from "@/data/mockConversations";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Same file as the screen: used once
function MessagesHeader() {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.back()} hitSlop={8}>
        <Ionicons name="chevron-back" size={28} color={colors.text} />
      </Pressable>
      <View style={styles.titleRow}>
        <Text style={styles.title}>modeandkids</Text>
        <Ionicons name="chevron-down" size={18} color={colors.text} />
      </View>
      <Ionicons name="add" size={32} color={colors.text} />
    </View>
  );
}

// Same file as the screen: used once
function MessageTabs() {
  return (
    <View style={styles.tabRow}>
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabText]}>Primary</Text>
        <Text style={[styles.tab, styles.tabText, styles.tabActive]}>
          General
        </Text>
      </View>
      <Text style={styles.request}>1 request</Text>
    </View>
  );
}

// Same file as the screen: used once
function CameraBar() {
  return (
    <View style={styles.cameraBar}>
      <Ionicons name="camera" size={26} color={colors.link} />
      <Text style={styles.cameraText}>Camera</Text>
    </View>
  );
}

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MessagesHeader />
      <View style={styles.searchWrapper}>
        <SearchBar rightIcon="options-outline" />
      </View>
      <MessageTabs />

      <ScrollView showsVerticalScrollIndicator={false}>
        {mockConversations.map((conversation) => (
          <ConversationRow key={conversation.id} conversation={conversation} />
        ))}
      </ScrollView>

      <CameraBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  title: { fontSize: 18, fontWeight: "700", color: colors.text },
  searchWrapper: { paddingHorizontal: spacing.lg, paddingVertical: spacing.sm },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  tabs: { flexDirection: "row" },
  tab: { paddingVertical: spacing.md, marginRight: spacing.lg * 2 },
  tabText: { fontSize: 15, color: colors.textSecondary },
  tabActive: {
    color: colors.text,
    fontWeight: "700",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.text,
  },
  request: { fontSize: 15, color: colors.link },
  cameraBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  cameraText: { fontSize: 16, color: colors.link },
});
