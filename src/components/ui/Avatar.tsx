import { colors } from "@/constants/theme";
import { Image, StyleSheet, View } from "react-native";

interface AvatarProps {
  uri: string;
  size?: number;
  hasStoryRing?: boolean;
}

export default function Avatar({
  uri,
  size = 40,
  hasStoryRing = false,
}: AvatarProps) {
  const image = (
    <Image
      source={{ uri }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.inputBackground,
      }}
    />
  );

  if (!hasStoryRing) return image;

  const ringSize = size + 8;
  return (
    <View
      style={[
        styles.ring,
        { width: ringSize, height: ringSize, borderRadius: ringSize / 2 },
      ]}
    >
      {image}
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.storyRing,
  },
});
