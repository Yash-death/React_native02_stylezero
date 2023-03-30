import{
 StyleSheet,View,Text, Image, ScrollView
}from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style ={styles.headingtext}>Trending places</Text>
      <ScrollView horizontal={true}>
      <View style = {[styles.card,styles.cardElevated]}>
        <Image source={
             {
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
            }
        }
            style = {styles.cardImage}
        />
        <View style ={styles.cardBody}>
          <Text style ={styles.cardTitle}>Hawa Mahal</Text>
          <Text style ={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style ={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur,India.
          Built from red and pink sandstone,it is on the edge of the city palace.</Text>
          <Text style ={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
      <View style = {[styles.card,styles.cardElevated]}>
        <Image source={
            {
                uri:'https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Taj-Mahal.jpg'}
        }
            style = {styles.cardImage}
        />
        <View style ={styles.cardBody}>
          <Text style ={styles.cardTitle}>Taj Mahal</Text>
          <Text style ={styles.cardLabel}>The Taj City , Agra</Text>
          <Text style ={styles.cardDescription}>The Taj Mahal is a palace in the city of Agra,India.
          Built from white marble,in the memory of Mumtaaj by Shah Jahan.</Text>
          <Text style ={styles.cardFooter}>16 mins away from Agra railway station</Text>
        </View>
      </View>
      <View style = {[styles.card,styles.cardElevated]}>
        <Image source={
            {
              uri : 'https://images.pexels.com/photos/4533747/pexels-photo-4533747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        }
            style = {styles.cardImage}
        />
        <View style ={styles.cardBody}>
          <Text style ={styles.cardTitle}>Ram Mandir</Text>
          <Text style ={styles.cardLabel}> ~Ayodhya, Uttar Pradesh</Text>
          <Text style ={styles.cardDescription}>Ram Mandir is a Hindu temple that is being built in 
                Ayodhya, Uttar Pradesh, India, at the site of Ram Janmabhoomi.</Text>
          <Text style ={styles.cardFooter}> Q5RX+VX6,New Colony, Ayodhya, Uttar Pradesh </Text>
        </View>
      </View>
      <View style = {[styles.card,styles.cardElevated]}>
        <Image source={
            {
             uri : 'https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=600'}
        }
            style = {styles.cardImage}
        />
        <View style ={styles.cardBody}>
          <Text style ={styles.cardTitle}>Kedarnath</Text>
          <Text style ={styles.cardLabel}> ~Rudraprayag, Uttrakhand</Text>
          <Text style ={styles.cardDescription}>Shri Kedarnath Temple, dedicated to
                 Lord Shiva, is the eleventh out of twelve Jyotirlingas of India.</Text>
          <Text style ={styles.cardFooter}> 265 km away </Text>
        </View>
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
      card:{
        backgroundColor : "#ffffff",
        width:370,
        height:320,
        borderRadius:15,
        marginHorizontal:10,
        marginVertical:5,
      },
      cardElevated:{
        elevation :3,
        shadowOffset:{
          width:1,
          height :1
        }
      },
      
      cardImage:{
        height :180,borderTopLeftRadius:15,
        borderTopRightRadius:15
       // marginBottom :5,marginTop:6
      },
      cardBody:{
        padding:5,
        borderRadius : 4,
       // backgroundColor : '#0f5670',
       // margin:2
      },
      cardTitle:{
        fontWeight:'bold',
        fontSize:18,
        color: '#000000'},
      cardLabel:{fontWeight:'800',
      fontSize:12,
      color: '#758283'},
      cardDescription:{
        fontWeight:'bold',
        fontSize:12,
        color: '#000000'
      },
      cardFooter:{fontWeight:'bold',
      fontSize:12,
      color: '#0000ff',
       //paddingTop: 6,
      marginTop:6,
    }
})