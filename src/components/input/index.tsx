import { TextInput, TextInputProps } from 'react-native'
import { styles } from './style'
import { colors } from '@/styles/colors'

export function Input({ ...rest }: TextInputProps) {
  return (< TextInput style={styles.container} {...rest} placeholderTextColor={colors.gray[200]} />)
}