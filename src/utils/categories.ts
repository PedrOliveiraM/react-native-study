import { MaterialIcons } from '@expo/vector-icons'
type Category = {
  id: string
  name: string
  isSelected: boolean
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  { id: '1', name: 'Curso', icon: 'code', isSelected: false },
  { id: '2', name: 'Projeto', icon: 'folder', isSelected: false },
    { id: '3', name: 'Site', icon: 'language', isSelected: false },
  { id: '4', name: 'Artigo', icon: 'newspaper', isSelected: false },
  { id: '5', name: 'Vídeo', icon: 'movie', isSelected: false },
  { id: '6', name: 'Documentação', icon: 'content-paste', isSelected: false }
]
