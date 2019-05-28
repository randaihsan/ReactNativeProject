import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry
} from 'react-native';
import {Camera as RNCamera} from 'expo';
import TabBarIcon from '../components/TabBarIcon';
import { Permissions } from 'expo';

import { MonoText } from '../components/StyledText';

export default class CameraScreen extends React.Component {

  async componentDidMount (){
    await Permissions.askAsync(Permissions.CAMERA)
  }
  takePicture = async () => {
    try{
      const data = await this.camera.takePictureAsync();
      // console.log(data.uri);
    }catch(err){

    }
  };
  render() {
    return (
      <View style={styles.container}> 
        <RNCamera style={{ flex: 1 }} type={RNCamera.Constants.Type.back}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}>
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}Flip{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </RNCamera>

        {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
          <TabBarIcon name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
          />
        </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    backgroundColor:'black',    
  },
  preview:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})

AppRegistry.registerComponent('InstagramKu',()=>InstagramKu);