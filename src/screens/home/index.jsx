import { Button, Text, TextInput, View } from "react-native";
import { style } from "./style";
import { style as global } from "../../global/style";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const clickHandler = () => {
    setGoalsList((current) => [...current, inputValue]);
  };

  return (
    <View style={global.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.inputText}
          placeholder="Your text here..."
          onChangeText={(value) => setInputValue(value)}
        />
        <Button title="Add Goal" onPress={clickHandler} />
      </View>

      <View>
        {goalsList.map((goal, goalIndex) => (
          <View style={style.goalItem} key={goalIndex}>
            <Text style={{ color: "#fff" }}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
