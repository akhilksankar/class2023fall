import {StyleSheet, View,TextInput, Button } from 'react-native';
export default function SignInPage({navigation}){
    return(
        <View>
            <h1>Login</h1>
            <TextInput style={styles.input} placeholder='email'></TextInput>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
            <View style={styles.button}>
                <Button title='Login' color= "#006400" onPress={()=>navigation.navigate("Profile")}></Button>
                <Button title='Signup' color= "#9acd32"onPress={() => navigation.navigate("Registration")}></Button>
            </View>
        </View>
    );
}const  styles = StyleSheet.create({
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
    },
    button:{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row"   }
  });