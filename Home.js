import { StatusBar } from 'expo-status-bar';
import { useState ,useContext} from 'react';
import { StyleSheet, Text, View,Button,Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {EventRegister} from "react-native-event-listeners";
import ThemeContext from './ThemeContext';

export default function Home({navigation}) {
    
    const theme = useContext(ThemeContext)
    const [mode,setMode] = useState(false);

  return (
    <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text1,{color: theme.color}]}>WELCOME HOME</Text>
      <Switch value={mode} onValueChange={(value)=> {
        setMode(value)
        EventRegister.emit("changeTheme",value)
        }}/>
      <Button title='Menu' onPress={()=>navigation.navigate('Menu')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
    margin: 10
  }
});
