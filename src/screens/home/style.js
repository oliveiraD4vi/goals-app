import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  goalsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputText: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 10,
  },
  goalItem: {
    borderColor: "#222",
    borderWidth: 2,
    backgroundColor: "#222",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 12,
    minWidth: 250,
    alignItems: "center",
    margin: 5,
  },
});
