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
import { MonoText } from '../components/StyledText';

export default class FeedScreen extends React.Component {
  constructor(props){
      super(props);
      this.state={
          feeds:[0,1,2,3,4,5,6,7,8,9,10],
          refresh:false
      }
  }
  loadNew = () =>{
      this.setState({
          refresh:true,
      });
      this.setState({
          feeds:[11,12,13,14,15,16,17,18,19,20],
          refresh:false
      });
  }
  static navigationOptions = {
    headerLeft:<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center',paddingLeft:5 }}>
    <TouchableOpacity>
      <TabBarIcon name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}/>
    </TouchableOpacity>
    <View><Text style={{fontSize:20}}> INSTAGRAM</Text></View>
    {/* <View><MonoText style={{fontSize:20,fontWeight:'bold'}}> Instagram</MonoText></View> */}
  </View>,
    headerTitleStyle:{textAlign: 'left',flex:1},
    title:null,
    titleStyle:{fontFamily: 'Billabong'},
    headerRight:<View style={{flex:1,flexDirection:'row'}}>
      <View style={{paddingRight: 10}}>
      <TouchableOpacity>
      <TabBarIcon name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}/>
    </TouchableOpacity>
      </View>
      <View style={{paddingRight: 10}}>
        <TouchableOpacity>
      <TabBarIcon name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}/>
    </TouchableOpacity>
      </View>
    </View>,
  };
  render(){
    return(
      <View style={{flex:1}}>
          <View>
              <ScrollView horizontal={true}>
                  <View style={{justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',paddingVertical:10,borderBottomWidth:1,borderColor:'grey',flex:1}}>
                      <View style={{paddingRight:15}}>
                        <TouchableOpacity>
                        <Image source={{uri: 'https://api.adorable.io/avatars/285/'}} style={{marginLeft: 1,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/>   
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Your Story</Text>
                        </TouchableOpacity>
                      </View>
                      <View>                
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/68.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/> 
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View> 
                      <View>  
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/14.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/>  
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>   
                      <View>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/>  
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>   
                      <View>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/95.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/> 
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>  
                      <View>  
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/66.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/> 
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>  
                      <View>  
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/26.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/>
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>      
                      <View>                    
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',margin:5}}/>  
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>  
                      <View> 
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/17.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/> 
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>   
                      <View> 
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} style={{marginLeft: 15,width:60,height:60,borderRadius: 50,borderWidth: 3,borderColor:'#C70039',}}/>   
                        <Text style={{fontSize:10,textAlign:'center',paddingTop:5}}>Their Story</Text>
                      </View>  
                  </View>   
              </ScrollView>    
          </View>                            
          <FlatList
              refreshing={this.state.refresh}
              onRefresh={this.loadNew}
              data={this.state.feeds}
              keyExtractor={(item,index)=> index.toString()}
              style={{flex:1,backgroundColor:'white'}}
              renderItem={({item,index})=> (
                  <View key={index} style={{width:'100%',overflow:'hidden',marginBottom:5,justifyContent:'space-between',borderBottomWidth:1,borderColor:'grey'}}>
                  <View style={{padding:5,width:'100%',flexDirection:'row',flex: 1,alignItems: 'center'}}>
                      <Image source={{uri: 'https://api.adorable.io/avatars/285/test@user.i.png'}} style={{marginLeft: 1,width:40,height:40,borderRadius: 50}}/>   
                      <Text> RandaIhsan</Text> 
                      <View style={{paddingLeft:270}}>
                        <TabBarIcon                          
                          name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'}
                        />
                      </View>                    
                  </View>
                  
                  <View>
                      <Image
                      source={{uri:'https://source.unsplash.com/random/'+Math.floor((Math.random()* 9999)+1) }}
                      style={{resizeMode:'cover',width:'100%',height:275}}
                      />
                  </View>
                  <View style={{padding:5}}>
                      <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{paddingLeft:5}}>
                        <TouchableOpacity>
                        <TabBarIcon
                          
                          name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
                        />
                        </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:15}}>
                        <TouchableOpacity>
                        <TabBarIcon
                          
                          name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
                        />
                        </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:15}}>
                        <TouchableOpacity>
                        <TabBarIcon                          
                          name={Platform.OS === 'ios' ? 'ios-send' : 'md-send'}
                        />
                        </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:270}}>
                        <TouchableOpacity>
                        <TabBarIcon                          
                          name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}
                        />
                        </TouchableOpacity>
                      </View>     
                      </View>  
                      <View>
                        <Text>Liked By Mister X and 1,024 others </Text>
                      </View>
                      <View style={{flex:1,flexDirection:'row'}}> 
                        <Text style={{fontWeight:'bold'}}>RandaIhsan</Text><Text> No Caption Needed!</Text>
                      </View>
                      <Text style={{marginTop:10,textAlign:'left',paddingBottom:15}}>View all 122 comments</Text>
                  </View>
                  </View>        
              )}
          />
      </View>
  );
}}