import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native'

interface IconButtonProps {
  onPress: (event: GestureResponderEvent) => void
  icon: keyof typeof MaterialIcons.glyphMap
  label: string
}

const IconButton: FC<IconButtonProps> = ({ icon, label, onPress }) => {
  return (
  <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  }
})

export default IconButton
