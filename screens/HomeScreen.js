import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={Styles.titleHomeScreen}>
        HomeScreen
      </Text>
      <TouchableOpacity
        style={Styles.TouchableStyles}
        onPress={() => navigation.navigate('Stack')}
      >
        <Text style={Styles.textButtomStack}>
          Go to stakck screen
        </Text>
      </TouchableOpacity>
      
    </View>
  )
}

const Styles = StyleSheet.create({
  titleHomeScreen: {
    fontsize: 40,
    textAlign: 'center',
    marginTop: '20%'
  },
  TouchableStyles: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: '20%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,

  },
  textButtomStack: {
    fontSize:15,
    textAlign: 'center',
    color: 'white'
  },



})
export default HomeScreen
