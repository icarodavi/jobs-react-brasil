import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'
import RedInput from '../components/red-input'
import Header from '../components/header'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import theme from '../utils/theme'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

const Form = styled.View`
  flex: 5;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  margin-vertical: 20px;
  margin-horizontal: 30px;
`

const FormTitle = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 24px;

`

const FormMessage = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 16px;
`

const GoButton = styled.TouchableOpacity`
  background-color: white;
`
const SpanRed = styled.Text`
  color: rgb(255, 82, 82);
`

const SignupButton = styled.TouchableOpacity`
  background-color: #007aff;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50;
`

const SignupText = styled.Text`
  font-size: 24px;
  color: #ffffff;
`

class Signup extends React.Component {
  static navigationOptions = {
    header: Header
  };

  handleLoginPress() {

  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <Wrapper>
        <Form>
          <FormTitle>Be part of the Team!</FormTitle>
          <RedInput
            selectTextOnFocus
            placeholder='First Name'
          />
          <RedInput
            placeholder='Last Name'
          />
          <RedInput
            placeholder='Email'
          />
          <RedInput
            placeholder='Password'
            secureTextEntry
          />
        <SignupButton onPress={this.handleRegisterPress}>
          <SignupText>Register</SignupText>
        </SignupButton>
        </Form>
      </Wrapper>
    )
  }
}

export default Signup
