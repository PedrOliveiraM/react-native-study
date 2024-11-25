import { Categories } from '@/components/categories'
import { Links } from '@/components/link'
import { Option } from '@/components/option'
import { LinkStorage } from '@/storage/link-storage'
import { colors } from '@/styles/colors'
import { categories } from '@/utils/categories'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useFocusEffect } from 'expo-router'
import { useCallback, useState } from 'react'
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View, Linking } from 'react-native'
import { styles } from './styles'

export default function Index() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [category, setCategory] = useState<string>(categories[0].name)
  const [dataLinks, setDataLinks] = useState<LinkStorage[] | []>([])
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage)

  async function getLinks() {
    try {
      const response = await LinkStorage.get()
      const filtered = response.filter((link) => link.category === category)

      setDataLinks(filtered)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links")
    }
  }

  function closeModal() {
    setShowModal(false)
  }

  function openModal() {
    setShowModal(true)
  }

  function handleDetails(link: LinkStorage) {
    openModal()
    setLink(link)
  }

  async function linkRemove() {
    try {
      await LinkStorage.remove(link.id)
      getLinks()
      closeModal()
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel excluir")
    }
  }

  function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir ?", [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: linkRemove }
    ])
  }

  async function handleOpen() {
    try {
      await Linking.openURL(link.url)
      closeModal()
    } catch (error) {
      Alert.alert("Link", "Não foi possível abrir o link")
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks()
    }, [category])
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
            onDetails={() => handleDetails(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType='slide' >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{link.category}</Text>
              <TouchableOpacity>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} onPress={closeModal} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{link.name}</Text>
            <Text style={styles.modalUrl}>{link.url}</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
              <Option name="Abrir" icon="language" onPress={handleOpen} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
