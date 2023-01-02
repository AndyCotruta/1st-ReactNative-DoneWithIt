import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image style={styles.mainImage} source={require("../assets/chair.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 32,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
    position: "absolute",
    top: 40,
    right: 32,
  },
});

export default ViewImageScreen;
