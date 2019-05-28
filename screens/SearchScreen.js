import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

export default class SearchScreen extends React.Component {
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
    headerLeft:<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center',paddingLeft:5 }}>
    <TouchableOpacity>
      <TabBarIcon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}/>
    </TouchableOpacity>
    <View>
      <TextInput
        placeholder="Search"
      />
    </View>
  </View>,
    headerTitleStyle:{textAlign: 'center',flex:1},
    title:null,
    titleStyle:{fontFamily: 'Billabong'},
    headerRight:<View style={{flex:1,flexDirection:'row'}}>
      <View style={{paddingRight: 10}}>
      <TouchableOpacity>
        <TabBarIcon name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'}/>
      </TouchableOpacity>
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
                    <Image style={{justifyContent: 'center',alignItems: 'center',height: 100,}} source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()* 800)+500) }} />
                  </View>                    
              )}
          />
        </View>
    );
  }
}