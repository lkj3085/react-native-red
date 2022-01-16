import React from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "../styles/styles";

function Items() {
  return (
    <>
      <View name="form" style={styles.form}>
        <TextInput
          style={[styles.borderStyle, styles.flex1]}
          type="number"
          placeholder="Create"
        />
        <Pressable onPress={() => {}} style={styles.flexCenter}>
          <FontAwesome
            name="pencil"
            size={24}
            style={{ marginHorizontal: 16, color: "#4285F4" }}
          />
        </Pressable>
      </View>
      <View name="thead" style={styles.thead}>
        <View name="tr" style={styles.rows}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Mov</Text>
          <View
            style={[styles.flex2, styles.flexCenter, { flexDirection: "row" }]}
          >
            <Text>Name</Text>
            <View>
              <Pressable
                onPress={() => {}}
                style={{ position: "absolute", top: -16, right: -24 }}
              >
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: "black" }]}
                />
              </Pressable>
              <Pressable
                onPress={() => {}}
                style={{ position: "absolute", bottom: -16, right: -24 }}
              >
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={{ color: "#EA4335" }}
                />
              </Pressable>
            </View>
          </View>
          <View
            style={[styles.flex3, styles.flexCenter, { flexDirection: "row" }]}
          >
            <Text>Enter</Text>
            <View>
              <Pressable
                onPress={() => {}}
                style={{ position: "absolute", top: -16, right: -24 }}
              >
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: "black" }]}
                />
              </Pressable>
              <Pressable
                onPress={() => {}}
                style={{ position: "absolute", bottom: -16, right: -24 }}
              >
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={[{ color: "black" }]}
                />
              </Pressable>
            </View>
          </View>
          <View
            style={[styles.flex3, styles.flexCenter, { flexDirection: "row" }]}
          >
            <Text>Expire</Text>
            <View>
              <Pressable
                onPress={() => {}}
                style={{ position: "absolute", top: -16, right: -24 }}
              >
                <AntDesign
                  name="caretup"
                  size={20}
                  style={[{ color: "black" }]}
                />
              </Pressable>
              <Pressable
                onPress={() => {}}
                style={{ position: "absolute", bottom: -16, right: -24 }}
              >
                <AntDesign
                  name="caretdown"
                  size={20}
                  style={[{ color: "black" }]}
                />
              </Pressable>
            </View>
          </View>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Del</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox
            style={[styles.flex1]}
            fillColor="#4285F4"
            onPress={() => {}}
          />
          <Text style={[styles.flex2, styles.textAlignCenter]}>사과</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <Pressable
            onPress={() => {
              Alert.alert("Delete member", "삭제 하시겠습니까?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="trash" size={24} style={{ color: "#EA4335" }} />
          </Pressable>
        </View>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox
            style={[styles.flex1, styles.textAlignCenter]}
            fillColor="#4285F4"
            onPress={() => {}}
          />
          <Text style={[styles.flex2, styles.textAlignCenter]}>바나나</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <Pressable
            onPress={() => {
              Alert.alert("Delete member", "삭제 하시겠습니까?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="trash" size={24} style={{ color: "#EA4335" }} />
          </Pressable>
        </View>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox
            style={[styles.flex1]}
            fillColor="#4285F4"
            onPress={() => {}}
          />
          <Text style={[styles.flex2, styles.textAlignCenter]}>딸기</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <Pressable
            onPress={() => {
              Alert.alert("Delete member", "삭제 하시겠습니까?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="trash" size={24} style={{ color: "#EA4335" }} />
          </Pressable>
        </View>
        <View name="tr" style={styles.rows}>
          <BouncyCheckbox
            style={[styles.flex1]}
            fillColor="#4285F4"
            onPress={() => {}}
          />
          <Text style={[styles.flex2, styles.textAlignCenter]}>키위</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <Pressable
            onPress={() => {
              Alert.alert("Delete member", "삭제 하시겠습니까?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="trash" size={24} style={{ color: "#EA4335" }} />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

export default Items;
