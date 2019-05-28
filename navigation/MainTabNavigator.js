import React from 'react';
import { Platform,View,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CameraScreen from '../screens/CameraScreen';
const FeedStack = createStackNavigator({
  Home: FeedScreen,
});

FeedStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

const PostStack = createStackNavigator({
  Post: CameraScreen,
});

PostStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'}
    />
  )
};
const ActivityStack = createStackNavigator({
  Activity: ActivityScreen,
});

ActivityStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
    />
  ),
};
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <View >
      <TouchableOpacity>
      <Image source={{uri: 'https://scontent.cdninstagram.com/vp/a520a14dd9dfbf263321816dd705c68a/5D9CB547/t51.2885-19/s150x150/59022959_626589894504803_1084893066633936896_n.jpg?_nc_ht=scontent.cdninstagram.com'}} style={{width:30,height:30,borderRadius: 50,borderWidth: 3,borderColor:'black',marginTop:10}}/>   
      </TouchableOpacity>
    </View>
  ),
};
export default createBottomTabNavigator({
  FeedStack,
  SearchStack,
  PostStack,
  ActivityStack,
  ProfileStack,
});
