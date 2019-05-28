import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

export default class PostScreen extends React.Component {
  constructor(props){
    super(props);
    state={

    }
  }
  static navigationOptions = {
    headerLeft:<View style={{paddingLeft:10}}>
      <TabBarIcon
        style={{paddingLeft: 10}}
        name={
          Platform.OS === 'ios'
            ? `ios-camera${focused ? '' : '-outline'}`
            : 'md-camera'
        }
      />
      </View>,
    headerTitleStyle:{textAlign: 'center',flex:1},
    title:"Instagram",
    titleStyle:{fontFamily: 'Billabong'},
    headerRight:<View style={{flex:1,flexDirection:'row'}}>
      <View style={{paddingRight: 10}}>
        <TabBarIcon
        name={
          Platform.OS === 'ios'
            ? `ios-tv${focused ? '' : '-outline'}`
            : 'md-tv'
        }
        style={{paddingRight: 10}}
      />
      </View>
      <View style={{paddingRight: 10}}>
        <TabBarIcon
        name={
          Platform.OS === 'ios'
            ? `ios-send${focused ? '' : '-outline'}`
            : 'md-send'
        }
      />
      </View>
    </View>,
  };
  render(){
    return(
        <View>
            <Text>PostScreen</Text>
        </View>
    );
  }
}