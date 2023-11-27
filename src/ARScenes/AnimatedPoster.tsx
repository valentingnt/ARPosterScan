import {
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroVideo,
} from '@viro-community/react-viro';

export function AnimatedPosterAR() {
  ViroARTrackingTargets.createTargets({
    animatedPoster: {
      source: require('../assets/interstellar.jpeg'),
      physicalWidth: 1,
      type: 'Image',
    },
  });

  return (
    <ViroARScene>
      <ViroARImageMarker
        target={'animatedPoster'}
        onAnchorFound={() => console.log('FOUND LOL')}>
        <ViroVideo
          source={require('../assets/interstellar_animated.mov')}
          loop={true}
          height={1.5}
          rotation={[-90, 0, 0]}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
}
