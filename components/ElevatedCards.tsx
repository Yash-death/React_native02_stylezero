import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style ={styles.headingtext}>Elevated Cards</Text>
      <ScrollView horizontal ={true} style={styles.container}>
        <View style = {[styles.card,styles.cardelevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.cardelevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card,styles.cardelevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card,styles.cardelevated]}>
            <Text>scroll</Text>
        </View><View style = {[styles.card,styles.cardelevated]}>
            <Text>more...</Text>
        </View>
        <View style = {[styles.card,styles.cardelevated]}>
            <Text>😍</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 10,
        fontFamily : 'Times new roman'
      },
      container:{
        padding:8,
      },
      card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin : 8
      },
      cardelevated:{
        backgroundColor: '#5d3456',
        elevation : 8,
        shadowOffset: {
            width : 1,
            height :1
        },
        shadowColor:'#ef5352',
        shadowOpacity:0.7,
        shadowRadius:4
      }
})