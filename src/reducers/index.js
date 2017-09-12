import {combineReducers} from 'redux';
import PinFrag from './PinFrag';
import PinDetail from './PinDetail';
import MyFrag from './MyFrag';
import MessageFrag from './MessageFrag';
import SearchFrag from './SearchFrag';
const InitReducers = combineReducers({PinFrag,PinDetail,MyFrag,MessageFrag,SearchFrag});

export default InitReducers;