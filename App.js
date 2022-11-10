import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Menu from './Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {EventRegister}  from "react-native-event-listeners";
import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';
import Theme from './Theme';

export default function App() {

  const [mode,setMode] = useState(false);
  
  const Stack = createNativeStackNavigator();

  useEffect(()=>{
    let eventListener = EventRegister.addEventListener(
      "changeTheme"
      ,(data)=>{
      setMode(data);
    })
    return ()=>{
      EventRegister.removeEventListener(eventListener);
    }
  })


  return (
    <ThemeContext.Provider value={mode === true? Theme.dark:Theme.light}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name= "Home"
        component={Home}
        />
        <Stack.Screen
        name= "Menu"
        component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 20
  },
});
