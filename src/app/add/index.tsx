import { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { colors } from '@/styles/colors'
import { router } from 'expo-router'
import { Categories } from '@/components/categories'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { LinkStorage } from '@/storage/link-storage'

export default function Add() {
  const [category, setCategory] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [url, setUrl] = useState<string>("")

  const handleAdd = async () => {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione a categoria")
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Informe o nome")
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Informe a URL")
      }

      await LinkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category
      })

      Alert.alert("Sucesso", "Novo link foi adicionado", [
        {
          text: "Ok",
          onPress: () => router.back()
        }
      ])

    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder='Nome' onChangeText={setName} autoCapitalize='words' />
        <Input placeholder='Url' onChangeText={setUrl} autoCorrect={false} autoCapitalize='none' />
        <Button title='Salvar' onPress={handleAdd} />
      </View>
    </View>
  )
}