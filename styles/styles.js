import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    margin: 16,
    flexDirection: "row",
  },
  thead: {
    marginVertical: 0,
    marginHorizontal: 16,
    paddingVertical: 16,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  tbody: {
    margin: 16,
  },
  rows: {
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 4,
  },
  textAlignCenter: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
});
