import { StyleSheet, View, Platform, StatusBar } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ECDC4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
