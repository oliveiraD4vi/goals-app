import { Button, Text, TextInput, View } from "react-native";
import { style } from "./style";
import { style as global } from "../../global/style";

export default function Home() {
  return (
    <View style={global.container}>
      <View style={style.inputContainer}>
        <TextInput style={style.inputText} placeholder="Your text here..." />
        <Button title="Add Goal" />
      </View>

      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}
