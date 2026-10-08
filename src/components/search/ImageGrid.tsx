import { colors } from "@/constants/theme";
import { GridImage } from "@/types";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

interface ImageGridProps {
  images: GridImage[]; //needs at least 3 images for featured block
}

const GAP = 1; //thin gap between images, in pixels

export default function ImageGrid({ images }: ImageGridProps) {
  const { width } = useWindowDimensions();
  const tile = (width - GAP * 2) / 3;
  const bigTile = tile * 2 + GAP;

  // The first three images form the featured block: two small tiles stacked next to one big one
  //"...rest" creates normal 3 image rows below
  const [first, second, featured, ...rest] = images;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Image
            source={{ uri: first.imageUrl }}
            style={[styles.image, { width: tile, height: tile }]}
          />
          <Image
            source={{ uri: second.imageUrl }}
            style={[styles.image, { width: tile, height: tile }]}
          />
        </View>
        <Image
          source={{ uri: featured.imageUrl }}
          style={[styles.image, { width: bigTile, height: bigTile }]}
        />
      </View>

      <View style={styles.wrap}>
        {rest.map((image) => (
          <Image
            key={image.id}
            source={{ uri: image.imageUrl }}
            style={[styles.image, { width: tile, height: tile }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: GAP },
  row: { flexDirection: "row", gap: GAP },
  column: { gap: GAP },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: GAP },
  image: { backgroundColor: colors.inputBackground },
});
