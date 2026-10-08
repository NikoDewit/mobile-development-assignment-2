import Avatar from "@/components/ui/Avatar";
import { colors, spacing } from "@/constants/theme";
import { Story } from "@/types";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface StoryCircleProps {
  story: Story;
}

// Same file as StoriesRow: tiny and only used here
function StoryCircle({ story }: StoryCircleProps) {
  return (
    <View style={styles.story}>
      <Avatar uri={story.avatarUrl} size={64} />
      {/*numberOfLines={1} cuts long usernames off with "..." so layout stays even */}
      <Text style={styles.username} numberOfLines={1}>
        {story.username}
      </Text>
    </View>
  );
}

interface StoriesRowProps {
  stories: Story[]; //the list to display, passed in by the Home screen
}

export default function StoriesRow({ stories }: StoriesRowProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {stories.map((story) => (
          <StoryCircle key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //thin lines above and below separate the row from the header and feed
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  list: { paddingHorizontal: spacing.md, paddingVertical: spacing.md },
  story: { width: 76, alignItems: "center", marginRight: spacing.sm },
  username: { fontSize: 11, color: colors.text, marginTop: spacing.xs },
});
