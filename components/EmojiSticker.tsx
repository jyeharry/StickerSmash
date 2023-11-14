import { FC } from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'

interface EmojiStickerProps {
  imageSize: number
  stickerSource: ImageSourcePropType
}

const EmojiSticker: FC<EmojiStickerProps> = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  )
}

export default EmojiSticker
