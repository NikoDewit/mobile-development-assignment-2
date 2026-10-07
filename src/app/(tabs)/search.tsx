import ImageGrid from "@/components/search/ImageGrid";
import SearchBar from "@/components/ui/SearchBar";
import { colors, spacing } from "@/constants/theme";
import { mockGridImages } from "@/data/mockPosts";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TABS = ["Top", "Accounts", "Audio", "Tags", "Places"];

// Same file as the screen: used once
function SearchTabs() {
  return (
    <View style={styles.tabs}>
      {TABS.map((tab, index) => (
        <Text key={tab} style={[styles.tab, index === 0 && styles.tabActive]}>
          {tab}
        </Text>
      ))}
    </View>
  );
}

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.searchWrapper}>
        <SearchBar text="search" />
      </View>
      <SearchTabs />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageGrid images={mockGridImages} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  searchWrapper: { paddingHorizontal: spacing.lg, paddingVertical: spacing.sm },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  tab: {
    paddingVertical: spacing.md,
    fontSize: 15,
    color: colors.textSecondary,
  },
  tabActive: {
    color: colors.text,
    fontWeight: "700",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.text,
  },
});
