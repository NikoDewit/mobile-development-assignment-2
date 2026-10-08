import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

//type of a valid Ionicons icon name, pulled from the component's own props
//so TypeScript catches typos in the icon names below.
type IconName = React.ComponentProps<typeof Ionicons>["name"];

//switch tab icons when screen is focused vs unfocused
const TAB_ICONS: Record<string, { active: IconName; inactive: IconName }> = {
  index: { active: "home", inactive: "home-outline" },
  search: { active: "search", inactive: "search-outline" },
  reels: { active: "play-circle", inactive: "play-circle-outline" },
  profile: { active: "person-circle", inactive: "person-circle-outline" },
};

//base layout for all pages and navbar
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ focused, size }) => {
          const icons = TAB_ICONS[route.name];
          return (
            <Ionicons
              name={focused ? icons.active : icons.inactive}
              size={size + 2}
              color={colors.text}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="reels" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
