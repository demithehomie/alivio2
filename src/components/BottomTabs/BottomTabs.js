import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BottomTabs = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textmenu}>  BOTTOM TABS </Text>
    </View>
  )

}

export default BottomTabs;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8FBE8',
      padding: 40,
      
    },
    textmenu: {
        fontSize: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingBottom: 20,
        color: "black",
    },
  });
  