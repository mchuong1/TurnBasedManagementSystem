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

import TechnicianCard from '../components/TechnicianCard'

export default function Technicians() {

  const data = {
    name: 'Matthew Chuong',
    occupation: 'Developer',
    imageUri: 'https://scontent.fmia1-1.fna.fbcdn.net/v/t1.6435-9/102298115_10218632086767918_3620178296861360128_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lI7KXVxbUyIAX8HIoho&_nc_ht=scontent.fmia1-1.fna&oh=e136a9e13132752bf2a10036769d02e1&oe=60DAD010',
    likes: 5000
  }

  return(
    <Container>
      <Content>
        <TechnicianCard {...data}/>
      </Content>
    </Container>
  )
} 

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F0F1F6'
  }
});