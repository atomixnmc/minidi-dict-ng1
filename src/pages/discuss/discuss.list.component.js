class DiscussListCtrl {
	constructor($scope, DiscussService) {
		this.$scope = $scope;
		this.DiscussService = DiscussService;

		this.start();
	}

	changeDisplay(){
		console.log('changeDisplay');
	}

	changePage(){
		console.log('changePage');
	}

	start(){
		this.topics = {
			pagination : {
				items: {
					total: 100
				},
				page: {
					total: 100
				},
				limit: {
        			modes : [10, 20, 50],
				},
			},
			search: {
				mode: '',
				method: 'like',
				options: {

				},
				filters: {

				}
			},
			display: {
				layout: {
					modes: ['grid', 'list']
				},
        		order: {
        			modes: [
	        			{name: 'time', title: 'time'},
	        			{name: 'hot', title: 'hot'}
	        		],
        			dir : 'desc'
        		}
			},
			classes: [
	        	{
	        		id: '1',
	                title: 'A'
	            },
	            {
	            	id: '2',
	                title: 'B'
	            }
	        ]
		};
		this.topics.pagination.items.current = 0;
		this.topics.pagination.page.current = 1;
		this.topics.pagination.limit.current = this.topics.pagination.limit.modes[0];
		this.topics.display.layout.current = this.topics.display.layout.modes[0];
		this.topics.display.order.current = this.topics.display.order.modes[0];

		if (this.listData) {
			this.topics.list = this.$scope.listData;
		} else {
			this.DiscussService.getTopicList(this.topicOptions)
			.then(data => {
				this.topics.list = data;
			});
		}

		console.log(this);
	}
}

module.exports = {
    template: require('./discuss.list.component.html'),
    controller: DiscussListCtrl,
    controllerAs: 'vm',
    bindings: {
        topicOptions: '=',
        listData: '='
    }
}