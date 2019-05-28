import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

export default class ActivityScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
        feeds:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20],
        refresh:false,
        nomorRandom:1
    }
  }
  loadNew = () =>{
      this.setState({
          refresh:true,
      });
      this.setState({
          feeds:[11,12,13,14,15,16,17,18,19,20,0,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,6,7,8,9,10],
          refresh:false
      });
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
        <View style={{flex:1}}>
            <FlatList
              refreshing={this.state.refresh}
              onRefresh={this.loadNew}
              data={this.state.feeds}
              keyExtractor={(item,index)=> index.toString()}
              numColumns={3}
              style={{flex:1,backgroundColor:'white'}}
              renderItem={({item,index})=> (                 
                  <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    <Image style={{justifyContent: 'center',alignItems: 'center',height: 100,}} source={{uri:'https://source.unsplash.com/random/'+Math.floor((Math.random()* 99)+1) }} />
                  </View>                    
              )}
          />
        </View>
    );
  }
}