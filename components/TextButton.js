import  React  from 'react'
import {
  Text,
  TouchableOpacity ,
  StyleSheet,
} from 'react-native'
import { purple } from '../utils/colors'

export default function TextButton ({onPress, children, style={}}) {
   // if style is undefined set it as an empty object
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  }
})
