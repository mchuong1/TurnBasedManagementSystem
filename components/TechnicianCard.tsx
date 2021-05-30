import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Title, 
  Content, Footer, FooterTab, 
  Button, Left, Right, Body, 
  Icon, Text, Form, Label, Input,
  Item, Picker, Card, CardItem
} from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function TechnicianCard(props: { name: any; occupation: any; imageUri: any; likes: any; }) {
  const { 
    name, occupation, imageUri,
    likes
  } = props;

  const navigation = useNavigation();

  return(
    <Container>
      <Content padder>
        <Card style={styles.card}>
          <CardItem style={styles.header}>
            <Body>
              <Text style={{color:'white'}}>{name}</Text>
              <Text note style={{color:'white'}}>{occupation}</Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image style={styles.image} source={{uri: imageUri}} />
          </CardItem>
          <CardItem style={styles.header}>
            <Left>
              <Button transparent>
                <Icon style={styles.icon} active name="thumbs-up" />
                <Text style={styles.icon}>{likes} Likes</Text>
              </Button>
            </Left>
            <Button style={styles.button} onPress={() => navigation.navigate('Confirmation')}>
              <Text style={{color: 'black'}}>Book an Appointment</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
} 

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  image: {
    height: 200,
    flex: 1
  },
  header: {
    backgroundColor: '#fc5c9c',
  },
  icon: {
    color: '#fccde2'
  },
  button: {
    backgroundColor: '#fccde2',
  }
});