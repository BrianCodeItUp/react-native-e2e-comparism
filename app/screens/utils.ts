import { Platform } from 'react-native'

const IS_IOS = Platform.OS === 'ios';
export function testID  (id: string, disableAccessible = false)  {
  const disableAccessibility = disableAccessible ? {accessible: false} : {};

  if (IS_IOS) {
    return {...disableAccessibility, testID: id};
  }

  return {...disableAccessibility, accessibilityLabel: id};
}

