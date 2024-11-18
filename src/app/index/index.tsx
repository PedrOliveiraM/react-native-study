import { MaterialIcons } from '@expo/vector-icons'
import { Image, TouchableOpacity, View } from 'react-native'

import { Category } from '@/components/category'
import { colors } from '@/styles/colors'
import { categories } from '@/utils/categories'
import { styles } from './styles'
import { Categories } from '@/components/categories'
import { Links } from '@/components/link'
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('@/assets/logo.png')} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />
      <Links
        name="Git"
        url="https://github.com/PedrOliveiraM"
        onDetails={() => console.log('clicou')}
      />
    </View>
  )
}
