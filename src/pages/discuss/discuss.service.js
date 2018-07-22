export default class DiscussService {
    constructor($http) {
        this.$http = $http
    }

    getTopicList(options) {
    	//NOTE: Mock
        var result = [
        {
            title: 'Topic1',
            owner: 'atomixnmc',
            stats: {
                view: 100
            },
            categories: ['Cat1', 'Cat2'],
            createTime: '01/01/2018'
        },
        {
            title: 'Topic1',
            owner: 'atomixnmc',
            stats: {
                view: 100
            },
            categories: ['Cat1', 'Cat2'],
            createTime: '01/01/2018'
        }
        ];
    	return new Promise((resolve, reject) => {
            resolve(result);
        });
    }
}