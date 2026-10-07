import { colors, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";

interface PostActionsProps {
  isLiked: boolean;
  onToggleLike: () => void;
}

export default function PostActions({
  isLiked,
  onToggleLike,
}: PostActionsProps) {
  // animated number that drives the heart's size (1 = normal)
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    onToggleLike();

    // Grow quickly, then spring back to normal size
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.3,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={handlePress} hitSlop={8}>
          <Animated.View style={{ transform: [{ scale }] }}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={28}
              color={isLiked ? colors.like : colors.text}
            />
          </Animated.View>
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
