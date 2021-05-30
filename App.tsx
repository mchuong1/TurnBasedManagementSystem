import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Title, 
  Body, Footer, FooterTab, Text
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Technicians from './screens/Technicians';
import Confirmation from './screens/Confirmation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Container>
        {/* <Header style={styles.header}>
          <Body>
            <Title style={{color: 'white'}}>Polish Nail</Title>
          </Body>
        </Header> */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fc5c9c'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name='Welcome'
            component={Home}
          />
          <Stack.Screen
            name="Technicians"
            component={Technicians}
          />
          <Stack.Screen
            name="Confirmation"
            component={Confirmation}
          />
        </Stack.Navigator>
        <Footer style={styles.footer}>
          <Text style={{color: 'white'}}>Copyright © 2021, Polish Nail, Inc. "Polish Nail" and logo are registered trademarks of Polish Nail, Inc</Text>
        </Footer>
      </Container>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fcefee'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fc5c9c',
    height: 40
  },
  footer: {
    backgroundColor: '#fc5c9c',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
