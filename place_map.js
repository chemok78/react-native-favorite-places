import React, { Component } from 'react';
import {MapView, View, StyleSheet, TouchableHighlight, Text} from 'react-native';

export default class PlaceMap extends Component {

    render(){

      const { annotations } = this.props;
    annotations.forEach(annotation => {
      annotation.rightCalloutView = (
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNavigation.bind(this, annotation.latitude, annotation.longitude)}
        >
          <Text style={styles.buttonText}>Navigation</Text>
        </TouchableHighlight>
      );
      })

        return(
          <View style={styles.view}>
            <MapView
              style={styles.map}
              region={this.region}
              annotations={this.props.annotations}
              //MapView needs annotations
              //annotations supplied via this.state.annotations when PlaceMap is rendered
            />
         </View>
        )

    }

    handleNavigation(la, lo) {
      const rla = this.region.latitude;
      const rlo = this.region.longitude;
      const url = `http://maps.apple.com/?saddr=${rla},${rlo}&daddr=${la},${lo}&dirflg=d`;
      return Linking.openURL(url);
    }

}//PlaceMap

const styles = StyleSheet.create({

  map: {

      flex:1

  }

})
