import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { styles } from './styles'

export function Category() {
  return (
    <Pressable>
      <MaterialIcons name="code" size={16} color={Colors.gray[400]} />
      <Text style={styles.name}>Projetos</Text>
    </Pressable>
  )
}
