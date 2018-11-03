import { Dimensions } from 'react-native';

export default function(imageWidth, imageHeight, padding, divisor = 1) {
  const win = Dimensions.get('window');
  const actualWidth = (win.width - 2 * padding) / divisor;
  const ratio = actualWidth / imageWidth;
  return {
    width: actualWidth,
    height: imageHeight * ratio,
  };
}
