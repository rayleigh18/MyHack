import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RegisPage from "./Stateless/Regis/RegisPage";
import LoginPage from "./Stateful/LoginPage/LoginPage"

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LoginPage/>
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',

  },
});
