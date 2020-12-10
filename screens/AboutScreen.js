import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';


const AboutScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          ---------Residencia---------------
          Es una aplicacion movil que permite
          registrar las actividades o roles 
          que se llevan a cabo en la Residencia
          universitaria URACCAN recinto Nueva Guinea.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default AboutScreen
