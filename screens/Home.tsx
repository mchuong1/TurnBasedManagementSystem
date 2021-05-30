import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Title, 
  Content, Footer, FooterTab, 
  Button, Left, Right, Body, 
  Icon, Text, Form, Label, Input,
  Item, Picker
} from 'native-base';
import CustomMultiPicker from 'react-native-multiple-select-list';

export default function Home({navigation}) {

  const options = {
    "123":"Manicure",
    "124":"Pedicure",
    "125":"ManiPedi"  
  }

  return (
    <Container>
      <Content padder contentContainerStyle={styles.root}>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel last style={styles.item}>
            <Label>Phone Number</Label>
            <Input />
          </Item>
          <CustomMultiPicker 
            options={options}
            search={true} // should show search bar?
            multiple={true} //
            placeholder={"Search Services"}
            placeholderTextColor={'#757575'}
            returnValue={"label"} // label or value
            callback={(res: any)=>{ console.log(res) }} // callback, array of selected items
            rowBackgroundColor={"#fccde2"}
            rowHeight={50}
            rowRadius={5}
            iconColor={"#00a2dd"}
            iconSize={30}
            selectedIconName={"ios-checkmark-circle-outline"}
            unselectedIconName={"ios-radio-button-off-outline"}
            scrollViewHeight={130}
            selected={[1,2]}
          />
          <Button 
            primary 
            full 
            style={styles.button}
            onPress={() => navigation.navigate('Technicians')}
            >
            <Text>Find Available Technician</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#fcefee',
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor:'#fc5c9c'
  },
  picker: {
    marginTop: 20,
  },
  item: {
    marginBottom: 20
  }
});
