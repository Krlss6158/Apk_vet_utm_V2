import React from 'react'
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Animated,
  Image,
  View,
} from 'react-native'
import {image} from '@src/types/declare'
import {petLost} from '@src/types/declare'

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground)

const ImagesPetDetailLost = ({
  navigation,
  images,
  index,
  item,
  width,
  HEADER_HEIGHT_EXPANDED,
  HEADER_HEIGHT_NARROWED,
  pet,
}: {
  navigation: any
  images: image[]
  index: number
  item: image
  width: number
  HEADER_HEIGHT_EXPANDED: number
  HEADER_HEIGHT_NARROWED: number
  pet: petLost
}) => {
  return (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => {
        navigation.navigate('IMAGES', {
          filePath: images,
          index,
          pet,
        })
      }}>
      <Image
        style={{
          width,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          backgroundColor: '#ddd',
        }}
        source={{uri: item.url}}
      />
    </TouchableWithoutFeedback>
  )
}

export default ImagesPetDetailLost
