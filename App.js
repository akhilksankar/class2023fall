import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegistrationPage from './RegistrationPage';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <RegistrationPage/> */}
    //   <SignInPage/>
    //   {/* <ProfilePage/>  */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignInPage}/>
        <Stack.Screen name="Registration" component={RegistrationPage}/>
        <Stack.Screen name="Profile" component={ProfilePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();


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
});
