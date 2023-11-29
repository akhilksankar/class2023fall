import {StyleSheet, View,TextInput, Button } from 'react-native';
export default function RegistrationPage({navigation}){
    return(
        <View style={styles.container}>
            <h1>Registration</h1>
            <TextInput style={styles.input} placeholder='email'></TextInput>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
            <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry={true}></TextInput>
            <TextInput style={styles.input} placeholder='userName'></TextInput>
            <TextInput style={styles.shortbio} placeholder='shortbio'></TextInput>
            <View>
                {/* <Button title='Login' color= "#006400"></Button> */}
                <Button title='Signup' color= "#9acd32" onPress={() => navigation.navigate("Profi le")}></Button>
            </View>
            
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