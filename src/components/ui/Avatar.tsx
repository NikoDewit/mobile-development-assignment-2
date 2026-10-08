import { colors } from "@/constants/theme";
import { Image } from "react-native";

interface AvatarProps {
  uri: string; //network URL of the photo
  size?: number; //optional width and height in pixels, defaults to 40
}

export default function Avatar({ uri, size = 40 }: AvatarProps) {
  return (
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
}
