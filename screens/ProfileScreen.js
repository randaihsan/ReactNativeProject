import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { Button } from 'native-base';

export default class ProfileScreen extends React.Component {
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
    headerLeft:<View style={{paddingLeft:10,flex:1,flexDirection:'row',textAlign:'center'}}><Text>randaihsan</Text>
    <TouchableOpacity>
      <TabBarIcon
        style={{paddingLeft: 10}}
        name={
          Platform.OS === 'ios'
            ? `ios-arrow-dropdown${focused ? '' : '-outline'}`
            : 'md-arrow-dropdown'
        }
      />
      </TouchableOpacity>
      </View>,
    headerTitleStyle:{textAlign: 'center',flex:1},
    title:null,
    titleStyle:{fontFamily: 'Billabong'},
    headerRight:<View style={{flex:1,flexDirection:'row'}}>
      <View style={{paddingRight: 10}}>
      <TouchableOpacity>
        <TabBarIcon
        name={
          Platform.OS === 'ios'
            ? `ios-time${focused ? '' : '-outline'}`
            : 'md-time'
        }
        style={{paddingRight: 10}}
      />
      </TouchableOpacity>
      </View>
      <View style={{paddingRight: 10}}>
      <TouchableOpacity>
        <TabBarIcon
        name={
          Platform.OS === 'ios'
            ? `ios-menu${focused ? '' : '-outline'}`
            : 'md-menu'
        }
      />
      </TouchableOpacity>
      </View>
    </View>,
  };
  render(){
    return(
      <View>
        <View style={{paddingRight:15,flexDirection:'row',borderBottomWidth:1,borderColor:'grey'}}>
            <View >
              <TouchableOpacity>
              <Image source={{uri: 'https://scontent.cdninstagram.com/vp/a520a14dd9dfbf263321816dd705c68a/5D9CB547/t51.2885-19/s150x150/59022959_626589894504803_1084893066633936896_n.jpg?_nc_ht=scontent.cdninstagram.com'}} style={{marginLeft: 20,width:80,height:80,borderRadius: 50,borderWidth: 3,borderColor:'red',marginTop:20}}/>   
              </TouchableOpacity>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              paddingLeft:10,
              paddingTop:50
            }}>
            <View style={{flex: 1, flexDirection: 'row',paddingTop:10,justifyContent:'center',alignItems:'center'}}>
              <View style={{width: 80, height: 50,padding:5}}>
                <View style={{textAlign:'center',justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold',textAlign:'center'}}>120</Text>
                  <Text style={{textAlign:'center'}}>Posts</Text>
                </View>
              </View>
              <View style={{width: 80, height: 50,padding:5}}>
              <View style={{textAlign:'center',justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold',textAlign:'center'}}>768</Text>
                  <Text style={{textAlign:'center'}}>Followers</Text>
                </View>
              </View>
              <View style={{width: 80, height: 50,padding:5}}>
              <View style={{textAlign:'center',justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold',textAlign:'center'}}>500</Text>
                  <Text style={{textAlign:'center'}}>Following</Text>
              </View>
              </View>
            </View>   
            <View  style={{width: 240, height: 50,paddingLeft:15,flexDirection: 'row',alignItems:'center'}}>
            <Button title="Learn More" color="#841584"/>
            </View>
          </View>                     
        </View>
        <View style={{flex:1,backgroundColor: 'powderblue'}}>
          <Text>CobaIcon</Text>
        </View>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.feeds}
          keyExtractor={(item,index)=> index.toString()}
          numColumns={3}
          style={{flex:1,backgroundColor:'white'}}
          renderItem={({item,index})=> (                 
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Image style={{justifyContent: 'center',alignItems: 'center',height: 100,}} source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()* 100)+1) }} />
              </View>                    
          )}
        />
        <View style={{flex:1,backgroundColor: 'powderblue'}}>
          <Text>CobaIcon</Text>
        </View>
      </View>
    );
  }
}