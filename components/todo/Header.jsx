import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 38,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
