import { colors, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

interface SearchBarProps {
  text?: string;
  rightIcon?: IconName;
}

export default function SearchBar({
  text = "Search",
  rightIcon,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color={colors.textSecondary} />
      <Text style={styles.text}>{text}</Text>
      {rightIcon && (
        <Ionicons name={rightIcon} size={20} color={colors.textSecondary} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    height: 40,
  },
  text: {
    flex: 1,
    marginHorizontal: spacing.sm,
    fontSize: 16,
    color: colors.textSecondary,
  },
});
