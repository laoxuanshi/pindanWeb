import Mock, {Random} from 'mockjs';
import FetchMock from 'fetch-mock';

FetchMock.get(/\/getPinList/, Mock.mock({
    'list|10': [{
        'id|+1': 0,
        'imgurl|1':['https://img12.360buyimg.com/n5/jfs/t7819/65/2521313164/220589/3f1f9224/59af6733Ne28c3957.jpg',
            'https://img11.360buyimg.com/n9/s40x40_jfs/t2068/40/1692993298/149498/165d85c3/5668db84N3351c6a8.jpg',
            'https://img11.360buyimg.com/n9/s60x76_jfs/t7033/116/2428474066/337667/5d51bd48/598c0fc1N116d606d.jpg!cc_60x76.jpg'],
        'prog|1': ['拼单中','拼单成功'],
        'sex|1': ['male','female'],
        'creator': '@word(4)',
        'address|1': ['北京市海淀区五道口','北京市朝阳区国家体育馆'],
        'createtime': '@date',
        'detail': '@cparagraph(2)'
    }]
}));

FetchMock.get(/\/pindetail(.*)$/, Mock.mock({
    'id': 0,
    'imgurl':'https://img14.360buyimg.com/n1/s546x546_jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg',
    'prog|1': ['拼单中','拼单成功'],
    'type|1': ['网购拼单','线下拼单'],
    'sex|1': ['male','female'],
    'creator': '@word(4)',         //发起者
    'creatorAvaUrl': 'https://img11.360buyimg.com/n9/s60x76_jfs/t7033/116/2428474066/337667/5d51bd48/598c0fc1N116d606d.jpg!cc_60x76.jpg', //发起者头像
    'city': '@city',
    'address|1': ['北京市海淀区五道口','北京市朝阳区国家体育馆'],
    'createtime': '@date',
    'endtime': '@date',
    'detail': '@cparagraph(2)',
    'joiner|1': ['小明','小红'],
    'comment':[{
        id:0,
        commentor:'@word(4)',
        commentorAvaUrl: 'https://img11.360buyimg.com/n9/s60x76_jfs/t7033/116/2428474066/337667/5d51bd48/598c0fc1N116d606d.jpg!cc_60x76.jpg',
        commentcontent: '@word(4)'
    },{
        id:1,
        commentor:'@word(4)',
        commentorAvaUrl: 'https://img11.360buyimg.com/n9/s60x76_jfs/t7033/116/2428474066/337667/5d51bd48/598c0fc1N116d606d.jpg!cc_60x76.jpg',
        commentcontent: '@word(4)'
    },{
        id:2,
        commentor:'@word(4)',
        commentorAvaUrl: 'https://img11.360buyimg.com/n9/s60x76_jfs/t7033/116/2428474066/337667/5d51bd48/598c0fc1N116d606d.jpg!cc_60x76.jpg',
        commentcontent: '@word(4)'
    }]
}));
