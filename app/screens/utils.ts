import { Platform } from 'react-native'

const IS_IOS = Platform.OS === 'ios';
// apply to appium 
// export function testID  (id: string, disableAccessible = false)  {
//   const disableAccessibility = disableAccessible ? {accessible: false} : {};

//   if (IS_IOS) {
//     return {...disableAccessibility, testID: id};
//   }

//   return {...disableAccessibility, testID: id};
// }


/**
 * testID applied to both platform on Detox
 */
export function testID  (id: string, disableAccessible = false)  {
  const disableAccessibility = disableAccessible ? {accessible: false} : {};
  return {...disableAccessibility, testID: id};
}