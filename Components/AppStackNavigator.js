import Splash from './Splash';
import Login from './Login';
import Signup from './Signup';

import {createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    Splash: {
        screen : Splash 
    },
    Login : {
        screen: Login,
    },
    Signup : {
        screen: Signup,
    },
    
}, {
    initialRouteName: 'Splash'    
})

export default createAppContainer(AppNavigator)