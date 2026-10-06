import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="messages" options={{ title: "Messages" }} />
      <Stack.Screen name="post/[id]" options={{ title: "Posts" }} />
    </Stack>
  );
}
