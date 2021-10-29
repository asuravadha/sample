import { StatusBar } from "expo-status-bar";
import { useState, React } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [text] = useState(
    "seaaaaaaaaaaaaaaaaaaa,aaaa,aaaaaaaaaaaaaaaaa.aaaaaaaaaaaaabbbb.bbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbccccccccccccccc.ccccccccccccccccccccc.ccccccccccccccccccc"
  );
  const [showFull, setShowFull] = useState(false);
  return (
    <View style={styles.container}>
      {showFull ? (
        <Text style={styles.textToggle}>
          {text}

          <Text style={styles.textToggle} onPress={() => setShowFull(false)}>
            {"less"}
          </Text>
        </Text>
      ) : (
        <Text style={styles.textToggle}>
          {text.split(".")[0] + "."}

          <Text style={styles.textToggle} onPress={() => setShowFull(true)}>
            {"More"}
          </Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: "350",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textToggle: {
    color: "#3742ff",
    fontWeight: "350",
  },
});
