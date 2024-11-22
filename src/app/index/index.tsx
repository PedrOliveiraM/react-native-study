import { MaterialIcons } from '@expo/vector-icons'
import { FlatList, Image, Modal, TouchableOpacity, View, Text, Pressable } from 'react-native'

import { Categories } from '@/components/categories'
import { Links } from '@/components/link'
import { colors } from '@/styles/colors'
import { styles } from './styles'
import { Option } from '@/components/option'
import { Link, router } from 'expo-router'


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('@/assets/logo.png')} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={['1', '2', '3', '4', '5']}
        keyExtractor={item => item}
        renderItem={() => (
          <Links
            name="Pedro Oliveira"
            url="https://github.com/PedrOliveiraM"
            onDetails={() => console.log('clicou')}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />



      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>PedrOliveiraM</Text>
            <Text style={styles.modalUrl}>https://github.com/PedrOliveiraM</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
