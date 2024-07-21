import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormComponent from './src/formComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import FormReducer from './src/redux/reducer';

function LoginScreen() {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <FormComponent/>
      <Button title="Click Here" onPress={()=>navigation.navigate('Home')}></Button>
    </SafeAreaView>
  );
}

function HomeScreen() {
  const data=useSelector(state=>state.FormReducer.form)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Welcome</Text>
      <Text>{data.name}</Text>
      <Text>{data.email}</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;