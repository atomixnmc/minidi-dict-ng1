export default class DiscussService {
    constructor($http, URLService) {
        this.$http = $http
        this.URLService = URLService
    }

    getTopicList(options) {
    	return this.$http({
            url: this.URLService.getApiServiceUrl("/api/forum/topic/list"),
            // context: document.body
        });
    }
}