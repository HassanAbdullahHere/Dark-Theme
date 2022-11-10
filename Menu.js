import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemeContext from './ThemeContext';
import { useState ,useContext} from 'react';

export default function Menu(navigation) {

    const theme = useContext(ThemeContext)

  return (
    <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text1,{color: theme.color}]}>HELLO MENU HERE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
