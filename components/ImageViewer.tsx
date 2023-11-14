import { FC } from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType
  image: string
}

const ImageViewer: FC<ImageViewerProps> = ({
  placeholderImageSource,
  image,
}) => {
  return (
    <Image
      source={image ? { uri: image } : placeholderImageSource}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})

export default ImageViewer
