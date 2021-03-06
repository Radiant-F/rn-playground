import {ToastAndroid} from 'react-native';
import {LOADING} from '../redux/actionTypes';

export default function errorHandler(error, dispatch, message) {
  console.log(error);
  ToastAndroid.show(message, ToastAndroid.SHORT);
  dispatch({type: LOADING, payload: false});
}
