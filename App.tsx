import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisPage from "./Stateless/Regis/RegisPage"


export default function App() {
  return (
    <View style={styles.container}>      
      <RegisPage />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
