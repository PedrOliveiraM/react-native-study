import { MaterialIcons } from '@expo/vector-icons'
import { Image, TouchableOpacity, View } from 'react-native'

import { Category } from '@/components/category'
import { colors } from '@/styles/colors'
import { categories } from '@/utils/categories'
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

      {categories.map((value) => (
        <Category
          key={value.id}
          name={value.name}
          icon={value.icon}
          isSelected
        />
      ))}
    </View>
  )
}
