/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //state: which tab is selected, changed via a function onPress

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import PlaceMap from './place_map.js';

import AddPlace from './add_place.js';

export default class Places extends Component {

  constructor(){

      super();
      this.state = {

          selectedTab: 0,
          //record in state which tab is selected, set initially to the first one
          annotations: [
      {
        title: 'Smithsonian Museum',
        latitude: 38.8980,
        longitude: -77.0230
      },
      {
        title: 'UMCP',
        latitude: 38.9869,
        longitude: -76.9426
      },
      {
        title: 'Arlington',
        latitude: 38.8783,
        longitude: -77.0687
      }
    ]
      };

  }

  render() {
  //text and value of error messages are stored in state
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="favorites"
          //selected to true makes the tab highlighted
          selected={this.state.selectedTab === 0}
          onPress={this.handleTabPress.bind(this,0)}
        >
          <PlaceMap annotations={this.state.annotations}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Place"
          icon={require('./assets/pin.png')}
          selected={this.state.selectedTab === 1}
          //can use require to include files from other folders
          onPress={this.handleTabPress.bind(this,1)}
        >
             <AddPlace onAddPlace={this.handleAddPlace.bind(this)}  />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }//render

  handleAddPlace(annotation) {
  const annotations = this.state.annotations.slice();
  annotations.push(annotation);
  this.setState({ annotations });
  }  

  //onPress of TabBarIOS.item calls this function change the selected tab
  handleTabPress(tab){

    this.setState({selectedTab: tab});

  }

}//Places Component

const styles = StyleSheet.create({
  text: {

      textAlign: 'center',
      color: '#333333',
      marginTop: 50
  },
  view: {

      backgroundColor: '#fed',
      flex: 1
      //flex:1 makes a Flexbos which fills the entire screen

  }

});

AppRegistry.registerComponent('Places', () => Places);
