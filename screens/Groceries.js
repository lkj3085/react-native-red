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
import { styles } from "../styles/styles";

function Items({ navigation }) {
  return (
    <>
      <View name="form" style={styles.form}>
        <TextInput
          style={[styles.borderStyle, styles.flex1]}
          type="number"
          placeholder="Search"
        />
        <Pressable onPress={() => {}} style={styles.flexCenter}>
          <FontAwesome
            name="pencil"
            size={24}
            style={{ marginHorizontal: 16, color: "#34A853" }}
          />
        </Pressable>
      </View>
      <View name="thead" style={styles.thead}>
        <View name="tr" style={styles.rows}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>No</Text>
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
          <Text style={[styles.flex1, styles.textAlignCenter]}>Edit</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>Del</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>1</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>사과</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("ModalGroceryUpdate");
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="edit" size={24} style={{ color: "#FBBC05" }} />
          </Pressable>
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
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>2</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>바나나</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("ModalGroceryUpdate");
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="edit" size={24} style={{ color: "#FBBC05" }} />
          </Pressable>
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
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>3</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>딸기</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("ModalGroceryUpdate");
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="edit" size={24} style={{ color: "#FBBC05" }} />
          </Pressable>
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
        <View name="tr" style={[styles.rows, { height: 35 }]}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>4</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>키위</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-01</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>2022-01-15</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("ModalGroceryUpdate");
            }}
            style={[styles.flex1, styles.flexCenter]}
          >
            <FontAwesome name="edit" size={24} style={{ color: "#FBBC05" }} />
          </Pressable>
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

export function ModalGroceryUpdate(props) {
  console.log(props.route.name);
  return (
    <>
      <View name="thead" style={styles.thead}>
        <View name="member" style={styles.rows}>
          <Text style={[styles.flex2, styles.textAlignCenter]}>Name</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>Enter</Text>
          <Text style={[styles.flex3, styles.textAlignCenter]}>Expire</Text>
          <Text style={[styles.flex2, styles.textAlignCenter]}>Edit</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View name="member" style={styles.rows}>
          <TextInput
            style={[styles.flex2, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Name"
            value="사과"
          />
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Enter"
            value="2022-01-01"
          />
          <TextInput
            style={[styles.flex3, styles.textAlignCenter, styles.borderStyle]}
            placeholder="Expire"
            value="2022-01-15"
          />
          <Pressable
            onPress={() => {}}
            style={[styles.flex2, styles.flexCenter]}
          >
            <FontAwesome name="edit" size={24} style={{ color: "#FBBC05" }} />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

export default Items;
