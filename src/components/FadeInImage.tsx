import React from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage: React.FC<FadeInImageProps> = ({uri, style}) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const finishLoading = () => {
    setIsLoaded(false);
    fadeIn();
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoaded && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="5856D6"
          size={30}
        />
      )}
      <Animated.Image
        style={{opacity, ...(style as Object)}}
        onLoadEnd={finishLoading}
        source={{uri}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
