import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const getAsyncData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        console.log('getAsyncData ===> ', value);
      }
    } catch (e) {
      // error reading value
      console.log('getAsyncData Error ===> ', e);
    }
  };

  const setAsyncData = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // saving error
      console.log('storeAsyncData Error ===> ', e);
    }
  };

  const removeAsyncData = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      // remove error
      console.log('removeAsyncData Error ===>', e);
    }

    console.log('Done.');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonWrapper} onPress={getAsyncData}>
        <Text>Get Async Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => setAsyncData('12345')}>
        <Text>Set Async Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWrapper} onPress={removeAsyncData}>
        <Text>Remove Async Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  buttonWrapper: {
    width: '100%',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
  },
});

export default App;
