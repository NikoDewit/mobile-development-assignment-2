import Avatar from "@/components/ui/Avatar";
import { colors, spacing } from "@/constants/theme";
import { Story } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface StoryCircleProps {
  story: Story;
}

// Same file as StoriesRow: tiny and only used here
function StoryCircle({ story }: StoryCircleProps) {
  return (
    <View style={styles.story}>
      <View>
        <Avatar uri={story.avatarUrl} size={64} hasStoryRing={!story.isOwn} />
        {story.isOwn && (
          <View style={styles.addBadge}>
            <Ionicons name="add" size={14} color="#fff" />
          </View>
        )}
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {story.username}
      </Text>
    </View>
  );
}

interface StoriesRowProps {
  stories: Story[];
}

export default function StoriesRow({ stories }: StoriesRowProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryCircle story={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  list: { paddingHorizontal: spacing.md, paddingVertical: spacing.md },
  story: { width: 76, alignItems: "center", marginRight: spacing.sm },
  username: { fontSize: 11, color: colors.text, marginTop: spacing.xs },
  addBadge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.link,
    borderWidth: 2,
    borderColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
