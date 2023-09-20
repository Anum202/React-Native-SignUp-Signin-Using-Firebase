import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import useAuth from '../hooks/useAuth';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HeaderComponent from '../components/HeaderComponent';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ navigation }) => {
    const { user } = useAuth();

    if(user){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            headerShown: false
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen 
                        name="Welcome" 
                        component={WelcomeScreen} 
                        options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen 
                        name="ResetPassword" 
                        component={ResetPasswordScreen} 
                        options={() => ({
                            header: ({navigation}) => <HeaderComponent
                                iconName='arrow-left'
                                iconSize={26}
                                iconColor='black'
                                onPress={() => navigation.navigate('Login')}
                            />,
                        })}
                    />
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen} 
                        options={() => ({
                            header: ({navigation}) => <HeaderComponent
                                iconName='arrow-left'
                                iconSize={26}
                                iconColor='black'
                                onPress={() => navigation.navigate('Welcome')}
                            />,
                        })}
                    />
                    <Stack.Screen 
                        name="SignUp" 
                        component={SignUpScreen} 
                        options={() => ({
                            header: ({navigation}) => <HeaderComponent
                                iconName='arrow-left'
                                iconSize={26}
                                iconColor='black'
                                onPress={() => navigation.navigate('Welcome')}
                            />,
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    // return (
    //     <NavigationContainer>
    //         <Stack.Navigator initialRouteName='Welcome'>
    //             <Stack.Screen 
    //                 name="Welcome" 
    //                 component={WelcomeScreen} 
    //                 options={{
    //                 headerShown: false,
    //             }}/>
    //             <Stack.Screen 
    //                 name="Home" 
    //                 component={HomeScreen} 
    //                 options={{
    //                     headerShown: false
    //             }}/>
    //             <Stack.Screen 
    //                 name="ResetPassword" 
    //                 component={ResetPasswordScreen} 
    //                 options={() => ({
    //                     header: ({navigation}) => <HeaderComponent
    //                         iconName='arrow-left'
    //                         iconSize={26}
    //                         iconColor='black'
    //                         onPress={() => navigation.navigate('Login')}
    //                     />,
    //                 })}
    //             />
    //             <Stack.Screen 
    //                 name="Login" 
    //                 component={LoginScreen} 
    //                 options={() => ({
    //                     header: ({navigation}) => <HeaderComponent
    //                         iconName='arrow-left'
    //                         iconSize={26}
    //                         iconColor='black'
    //                         onPress={() => navigation.navigate('Welcome')}
    //                     />,
    //                 })}
    //             />
    //             <Stack.Screen 
    //                 name="SignUp" 
    //                 component={SignUpScreen} 
    //                 options={() => ({
    //                     header: ({navigation}) => <HeaderComponent
    //                         iconName='arrow-left'
    //                         iconSize={26}
    //                         iconColor='black'
    //                         onPress={() => navigation.navigate('Welcome')}
    //                     />,
    //                 })}
    //             />
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // )
}
export default AppNavigation;