import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Items from "./screens/Items";
import Groceries, { ModalGroceryUpdate } from "./screens/Groceries";

import { Provider } from "mobx-react";
import { itemsStore } from "./stores/ItemsStore";

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={Items}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <MaterialIcons
              name="add-shopping-cart"
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <MaterialIcons
              name="kitchen"
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Groceries}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Ionicons
              name="person-outline"
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
        listeners={{
          tabPress: (event) => {
            event.preventDefault();
            Alert.alert("Login", "Hello 홍길동!", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "Geust", onPress: () => console.log("Guest") },
              { text: "Login", onPress: () => console.log("Login") },
              { text: "Logout", onPress: () => console.log("Logout") },
            ]);
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider itemsStore={itemsStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="ModalGroceryUpdate"
              component={ModalGroceryUpdate}
              options={({ navigation }) => ({
                title: "Grocery update",
                headerTitleAlign: "center",
                headerLeft: () => <></>,
                headerRight: () => (
                  <Pressable onPress={() => navigation.goBack()}>
                    <FontAwesome name="close" size={25} />
                  </Pressable>
                ),
              })}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
