import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'



const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Du är inloggad i homepage</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
})


export default HomePage; 