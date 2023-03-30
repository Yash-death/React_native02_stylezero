import React from 'react' 
 import{
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
 } from 'react-native';
import ActionCard from './components/ActionCard';
import ContactLists from './components/ContactLists';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FlatCards from './components/FlatCards';
                  
const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
    <FlatCards/>
    <ElevatedCards/>
    <FancyCards/>
    <ActionCard/>
    <ContactLists/>
    </ScrollView>
   </SafeAreaView>
  )
}

export default App