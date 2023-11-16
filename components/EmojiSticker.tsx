import { FC } from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated'
import {
  GestureHandlerGestureEvent,
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler'

const AnimatedImage = Animated.createAnimatedComponent(Image)
const AnimatedView = Animated.createAnimatedComponent(View)

interface EmojiStickerProps {
  imageSize: number
  stickerSource: ImageSourcePropType
}

const EmojiSticker: FC<EmojiStickerProps> = ({ imageSize, stickerSource }) => {
  const scaleImage = useSharedValue(imageSize)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context: { translateX: number; translateY: number }) => {
      context.translateX = translateX.value
      context.translateY = translateY.value
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX
      translateY.value = event.translationY + context.translateY
    },
  })

  const onDoubleTap = useAnimatedGestureHandler<GestureHandlerGestureEvent>({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2) scaleImage.value *= 2
    },
  })

  const imageStyle = useAnimatedStyle(() => ({
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  }))

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  }))

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  )
}

export default EmojiSticker
