import React from 'react';
import {StyleSheet} from 'react-native';

import {ViroARSceneNavigator} from '@viro-community/react-viro';
import {AnimatedPosterAR} from './ARScenes';

export default function () {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: AnimatedPosterAR,
      }}
      numberOfTrackedImages={1}
      style={styles.f1}
      shadowsEnabled={true}
    />
  );
}

var styles = StyleSheet.create({
  f1: {flex: 1},
});
