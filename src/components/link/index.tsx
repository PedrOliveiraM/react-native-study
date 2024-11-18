import { Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/styles/colors'

type Props = {
  name: string
  url: string
  onDetails: () => void
}
export function Links({ name, url, onDetails }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.url} numberOfLines={1}>
          {url}
        </Text>
      </View>
      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  )
}
