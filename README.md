# Instagram Recreation (Expo)

**Course assignment:** Advanced Multi-Screen Mobile Application with Collaborative Navigation (Expo)
**Student name:** Niko Dewit
**Student ID:** 000817849
**Project folder:** `mobile-development-assignment-2`

A multi-screen mobile application built with Expo, React Native and TypeScript that recreates the layout and navigation structure of Instagram. The app uses tab navigation combined with a stack navigation flow, reusable typed components, and mock data in place of a backend.

---

## Reference Application

The reference app is **Instagram**. Four reference screenshots were used:

| Reference screenshot             | Recreated as              |
| -------------------------------- | ------------------------- |
| Home feed (stories row and post) | `Home` tab                |
| Messages inbox                   | `Messages` screen (stack) |
| Search results with image grid   | `Search` tab              |
| Single post view with comments   | `Profile` tab             |

Instagram was chosen because its interface has many distinct screens, nested navigation, lists, grids and many small reusable UI pieces, which makes it a good fit for the assignment's complexity requirement.

---

## Features

- **4 functional screens:** Home, Search, Messages and Profile (plus a simple placeholder for the Reels tab so the tab bar matches the reference)
- **Tab navigation** with four tabs (Home, Search, Reels, Profile) and Instagram-style filled/outline icons
- **Stack navigation:** the Messages screen is pushed on top of the tabs from the Home header, with a back arrow to return
- **Dynamic content:** the post feed, stories row, conversation list, search grid and category tabs are all rendered from arrays of data with `.map()`
- **Reusable components** with TypeScript prop interfaces
- **Interactive like button** with shared state: the heart toggles and the like count updates with it
- **Bonus, simple animation:** the heart "pops" (scales up and springs back) when tapped, using React Native's built-in `Animated` API

---

## Tech Stack

- [Expo](https://expo.dev/) (SDK from the `create-expo-app` default template)
- React Native with TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based navigation (tabs and stack)
- `@expo/vector-icons` (Ionicons) for icons
- `react-native-safe-area-context` for safe-area handling

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- The Expo Go app on a phone, or an iOS simulator / Android emulator

### Install and run

```bash
# 1. Clone the repository
git clone <repository-url>
cd mobile-development-assignment-2

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

Then press `i` for the iOS simulator, `a` for the Android emulator, or scan the QR code with Expo Go.

> **Note:** All photos are loaded from the internet (picsum.photos), so a network connection is needed to see images.

---

## Project Structure

```
mobile-development-assignment-2/
  src/
    app/                      Screens and navigation (Expo Router)
      _layout.tsx             Root stack navigator
      messages.tsx            Messages screen (stack screen)
      (tabs)/
        _layout.tsx           Bottom tab navigator
        index.tsx             Home tab
        search.tsx            Search tab
        reels.tsx             Reels tab (placeholder)
        profile.tsx           Profile tab
    components/
      ui/                     Shared across several screens
        Avatar.tsx
        SearchBar.tsx
      feed/                   Used by Home and Profile
        StoriesRow.tsx        (also contains StoryCircle)
        PostCard.tsx
        PostHeader.tsx
        PostActions.tsx
      messages/
        ConversationRow.tsx
      search/
        ImageGrid.tsx
    constants/
      theme.ts                Colors and spacing values
    data/
      mockPosts.ts            Posts, stories and grid images
      mockConversations.ts    Direct-message conversations
    types/
      index.ts                Shared TypeScript interfaces
```

---

## Navigation

```
Root Stack (app/_layout.tsx)
 |-- (tabs)   Bottom Tab Navigator (app/(tabs)/_layout.tsx)
 |     |-- Home      (index.tsx)  --- messenger icon ---> pushes Messages
 |     |-- Search    (search.tsx)
 |     |-- Reels     (reels.tsx)
 |     |-- Profile   (profile.tsx)
 |
 |-- messages   Stack screen, pushed on top of the tabs
```

- The **tab navigator** is nested inside the **root stack**, which satisfies the "tab navigation combined with at least one stack flow" requirement.
- Tapping the messenger icon on Home calls `router.push('/messages')`. The back arrow on Messages calls `router.back()`.
- Each screen draws its own header so it matches the reference screenshots, so the default navigator headers are turned off.

---

## Component Organization

The rule used throughout the project is:

> **A component gets its own file when it is reused in more than one place, or when it is large enough to hurt the readability of its parent. A component stays in its parent's file when it is small, used only once, and only makes sense in that one place.**

### Components in their own files

| Component         | Location    | Reason                                                                                                              |
| ----------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `Avatar`          | `ui/`       | Reused in the stories row, post headers and conversation rows. The `size` prop lets each place draw it differently. |
| `SearchBar`       | `ui/`       | Reused on the Search and Messages screens, with different text and an optional right icon.                          |
| `PostCard`        | `feed/`     | Reused on the Home feed and the Profile tab, and it is large.                                                       |
| `PostHeader`      | `feed/`     | A self-contained block of `PostCard`. Splitting it keeps `PostCard` readable.                                       |
| `PostActions`     | `feed/`     | Contains its own animation logic, so it is isolated from `PostCard`.                                                |
| `StoriesRow`      | `feed/`     | A distinct section of the Home screen with its own horizontal scroll behavior.                                      |
| `ConversationRow` | `messages/` | Rendered once per conversation, so it is a natural list-item component.                                             |
| `ImageGrid`       | `search/`   | Contains the grid layout calculations, the most complex piece of the Search screen.                                 |

### Components kept in the same file as their parent

| Component                                    | Parent file          | Reason                                                         |
| -------------------------------------------- | -------------------- | -------------------------------------------------------------- |
| `StoryCircle`                                | `StoriesRow.tsx`     | Tiny and only used by `StoriesRow`.                            |
| `HomeHeader`                                 | `(tabs)/index.tsx`   | Used once, only on Home.                                       |
| `SearchTabs`                                 | `(tabs)/search.tsx`  | Used once, only on Search.                                     |
| `MessagesHeader`, `MessageTabs`, `CameraBar` | `messages.tsx`       | Each is used once and only makes sense on the Messages screen. |
| `ProfileHeader`                              | `(tabs)/profile.tsx` | Used once, only on Profile.                                    |

### Conventions

- **Components** use PascalCase file names and a default export for the main component of the file.
- **Props** are always described with a TypeScript `interface` named `<ComponentName>Props`.
- **Shared data shapes** (`Post`, `Story`, `Comment`, `Conversation`, `GridImage`) live in `src/types/index.ts`.
- **Styles** are defined with `StyleSheet.create` at the bottom of each file, and colors and spacing come from `src/constants/theme.ts` so styling is consistent.
- **Imports** use the `@/` alias, which points to `src/`.
- **State** is kept as low in the tree as possible. For example, the like state lives in `PostCard`, which needs it to display the count, and `PostActions` receives it as props.

---

## Mock Data

The app has no backend, so hardcoded arrays in `src/data/` stand in for data that would normally come from a server. This is what makes the dynamic lists possible. Images use [picsum.photos](https://picsum.photos) with a fixed "seed" in each URL, so the same photo is returned every time. All usernames and names are placeholders.

---

## Animation

The like button in `PostActions.tsx` uses React Native's `Animated` API. On press, a scale value runs through `Animated.sequence`: a quick `timing` animation grows the heart to 1.3x, then a `spring` animation returns it to normal size. `useNativeDriver: true` keeps the animation running on the native thread.

---

## Declaration of AI Usage

AI was used to aid in the completion of this assignment. It was used to help me figure out how to use the network loaded photos from picsum, understand some of the coding concepts, matching the colors closely to Instagrams, and it was used to help generate this README file.
