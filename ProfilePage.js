import {StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default function ProfilePage({navigation}){
    return(
        <View style={styles.container}>
            <h1>Profile</h1>
            <Text>Username</Text>
            <Text>Bio</Text>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
            <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry={true}></TextInput>
            <Button title='change password' color= "#4169e1"></Button>
        </View>
    );
}

const  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input: {
      borderWidth: 1,
      margin:5,
      padding:5
    },
    shortbio:{
        padding:30,
        borderWidth: 1,
        margin:5,
    }
  });