import { Text, View } from "react-native";
import { style } from "./src/global/style";

import Home from "./src/screens/home";

export default function App() {
  return (
    <View style={style.main}>
      <Text style={style.title}>Goals App</Text>
      <Home />
    </View>
  );
}
