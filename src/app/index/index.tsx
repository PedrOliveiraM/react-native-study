import { Categories } from '@/components/categories'
import { Links } from '@/components/link'
import { Option } from '@/components/option'
import { LinkStorage } from '@/storage/link-storage'
import { colors } from '@/styles/colors'
import { categories } from '@/utils/categories'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useFocusEffect } from 'expo-router'
import { useEffect, useState, useCallback } from 'react'
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function Index() {
  const [category, setCategory] = useState<string>(categories[0].name)
  const [dataLinks, setDataLinks] = useState<LinkStorage[] | []>([])

  async function getLinks() {
    try {
      const response = await LinkStorage.get()
      setDataLinks(response)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links")
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks()
    }, [])
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('@/assets/logo.png')} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={dataLinks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Links
            name={item.name}
            url={item.url}
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
