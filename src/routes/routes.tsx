import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import { Dashboard } from '../screens/Dashboard';
import { Profile } from '../screens/Profile';

type  ITabRoutes = {
    Settings: undefined;
    Dashboard: undefined;
    Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

const Screen = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text>oi</Text>
        </View>
    )
}

interface IRoutes {

}

export const Routes: React.FunctionComponent<IRoutes> = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Screen} options={{
        tabBarIcon: () => <Icon name="setting" size={20} color="purple"/>
      }}/>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
        tabBarIcon: () => <Icon name="home" size={20} color="purple"/>
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => <Icon name="user" size={20} color="purple"/>
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}