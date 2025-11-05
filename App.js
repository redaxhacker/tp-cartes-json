import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CardList } from './components/CardList';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6f7fb'
  }
});
