import Mock, {Random} from 'mockjs';
import FetchMock from 'fetch-mock';

FetchMock.get(/\/getCatagoryList/, Mock.mock({
    'list': [{
        'icon':require('../images/fushi1.png'),
        'text':'服饰'
    },{
        'icon':require('../images/xiexue1.png'),
        'text':'鞋靴'
    },{
        'icon':require('../images/jiadian1.png'),
        'text':'家电'
    },{
        'icon':require('../images/tushu1.png'),
        'text':'图书'
    },{
        'icon':require('../images/shuma.png'),
        'text':'数码'
    },{
        'icon':require('../images/shipin.png'),
        'text':'食品'
    },{
        'icon':require('../images/qicheyongpin1.png'),
        'text':'汽车用品'
    },{
        'icon':require('../images/yundonghuwai.png'),
        'text':'运动户外'
    },{
        'icon':require('../images/diannaobangong1.png'),
        'text':'电脑办公'
    }]
}));

