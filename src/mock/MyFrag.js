import Mock, {Random} from 'mockjs';
import FetchMock from 'fetch-mock';

FetchMock.get(/\/getUserInfo/, Mock.mock({
    'id': 0,
    'sex|1': ['male','female'],
    'userName': '@word(4)',
    'userAvaUrl': 'https://img11.360buyimg.com/n9/s60x76_jfs/t7033/116/2428474066/337667/5d51bd48/598c0fc1N116d606d.jpg!cc_60x76.jpg', //头像
}));

