import Mock, {Random} from 'mockjs';
import FetchMock from 'fetch-mock';

FetchMock.get(/\/getMessageNum/, Mock.mock({
    'recommendNum':'@int(0,30)',
    'commentNum':'@int(0,30)',
    'pinNum':'@int(0,30)'
}));

