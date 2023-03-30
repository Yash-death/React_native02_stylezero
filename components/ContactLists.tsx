import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function () {
    const contacts = [
      {uid:1,
        name:'Yash Badoniya',
        status:'Love ❤️ to try new things',
        imageUrl:'https://media.licdn.com/dms/image/C5603AQE18kgeqX6JAQ/profile-displayphoto-shrink_400_400/0/1647460475352?e=1683158400&v=beta&t=Dn0sYybDaaM6e1bRGnRkShiC1NqJIsy3g3jhyM_pZ7A'
        
        
    },
    {
        uid:2,
        name:'Apoorv verma',
        status:'Doing Job as an iOS Developer',
        imageUrl:'https://media.licdn.com/dms/image/D4D03AQFSjc5duVfLfQ/profile-displayphoto-shrink_400_400/0/1673512468104?e=1683158400&v=beta&t=FIytdbKAX4f88sHphzFlPa6YZ0TBcgF_KcndJ1CgkC0'
        
    },
    {
        uid:3,
        name:'Aniket Sharma',
        status:'Love ❤️ Making Native Applications',
        imageUrl:'https://avatars.githubusercontent.com/u/84376990?v=4'
    },
    {
        uid:4,
        name:'Arastu gupta',
        status:'Seeeking Knowledge in all fields',
        imageUrl:'https://avatars.githubusercontent.com/u/101584387?v=4'
    }
];
  return (
    <View>
      <Text style={styles.headerText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) =>(
            <View key={uid} style={styles.userCard}>
                <Image source={{
                    uri: imageUrl
                }}
                style ={styles.userImage}/>
                <View style={styles.card}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{},
    userCard:{
        flexDirection:'row',
        margin:6,
        backgroundColor :"#f77777"
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:30,
        marginHorizontal:10,
        marginVertical:2
    },
    card:{
        flexDirection:'column',
        margin:9,
        elevation:3,
        shadowOffset:{
            width:1,
            height :1
          }
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
        
    },
    userStatus:{
        fontWeight:'500',
        color:'#fae546'
    }
})