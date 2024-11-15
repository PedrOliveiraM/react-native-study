import { MaterialIcons } from '@expo/vector-icons'
import { Image, TouchableOpacity, View } from 'react-native'

import { colors } from '@/styles/colors'
import { styles } from './styles'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('@/assets/logo.png')} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
