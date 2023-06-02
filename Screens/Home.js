import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileScreen from './ProfileScreen';
import CreatePostsScreen from './CreatePostsScreen';
import PostsScreen from './PostsScreen';
import { Pressable, View } from 'react-native';

const Tabs = createBottomTabNavigator();


export default function Home() {
  return <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Profile") {
        iconName = "person-outline";
      } else if (route.name === "Posts") {
        iconName = "grid";
      } else if (route.name === "Create") {
        iconName = "add";
      }
      return <View style={{width: 70, height: 40, backgroundColor: color, borderRadius: 20, alignItems: "center", justifyContent: "center"}}><Ionicons name={iconName} size={size} color={focused ? "#FFFFFF" : "#212121"} /></View>;
    },
    tabBarActiveTintColor: "#FF6C00",
    tabBarInactiveTintColor: "transparent",
    tabBarShowLabel: false,
    tabBarStyle: [{
        height: 70,
        padding: 10,
        paddingBottom: 20,
        justifyContent: "space-between"
    }]
  })}
>
    <Tabs.Screen name="Posts" component={PostsScreen} options={() => ({
            title: "Публікації",
            headerStyle: {
                height: 90,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
                marginLeft: 148,
                fontWeight: 500,
                fontSize: 17,
            },
            headerRight: () => <Pressable
                onPress={() => alert("This is a button!")}
                style={{marginRight: 20}}
              ><Ionicons name="log-out-outline" size={24} color="#BDBDBD"/></Pressable>
            ,
          })}/>
    <Tabs.Screen name="Create" component={CreatePostsScreen} options={{
            title: "Створити публікацію",
            headerStyle: {
                height: 90,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
                marginLeft: 104,
                fontWeight: 500,
                fontSize: 17,
            },
        }}/>
    <Tabs.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
</Tabs.Navigator>      
}