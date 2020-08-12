import { Platform } from 'react-native'

export function testID  (id: string)  {
  if (Platform.OS === 'ios') {
    return { testID: id }
  }

  return { accessibilityLabel: id }
}