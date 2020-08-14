import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RegisPage from "./Stateless/Regis/RegisPage";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <RegisPage/>
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
});
