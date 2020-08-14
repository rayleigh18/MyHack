import { Dimensions } from 'react-native';

const Device = {
    Width: Dimensions.get('window').width,
    Height: Dimensions.get('window').height
}

export default Device;