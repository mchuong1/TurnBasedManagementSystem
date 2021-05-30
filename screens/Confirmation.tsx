import React, { useEffect } from 'react'
import { Container,Text, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Confirmation() {

  const navigation = useNavigation()

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Welcome')
  //   }, 10000)
  // })

  return(
    <Container style={styles.root}>
        <Text style={styles.text}>Confirmed</Text>
        <Icon style={styles.icon} name='checkmark-circle-outline'/>
        <Text>
          You should get a text message shortly with information regarding your appointment!
        </Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 50,
    color: '#fc5c9c'
  },
  text: {
    fontSize: 50
  }
})