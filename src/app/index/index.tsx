// Toda rota para o expo precisa ser exportado por default
import { Text, View } from 'react-native'
import { styles } from './styles' // Onde está as estilizações
export default function Index() {

  return (
    <View>
      <Text style={styles.title}>Hello Myacon</Text>
      <Text>Hello Myacon</Text>
    </View>
  )
}

