import React from 'react';
import {View, Text} from 'react-native';
import Contacts from '@/screens/Contacts';
import Profile from '@/screens/Profile';
import DrawerNavigator from '@/screens/routes';
import Favorites from '@/screens/Favorites';
import User from '@/screens/User';
import Option from '@/screens/Option';
import Store from '@/store';
import { Provider } from 'react-redux';

const App=()=>
{
  return(
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  );
}
export default App;
