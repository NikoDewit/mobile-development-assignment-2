import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* tabs have own headers so hide default */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* stack screen has own header so hide default  */}
      <Stack.Screen name="messages" options={{ headerShown: false }} />
    </Stack>
  );
}
