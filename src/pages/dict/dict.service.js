export default class DictService {
    constructor($http, URLService) {
        this.$http = $http
        this.URLService = URLService
    }
    
    getDictList() {
        return $.ajax({
            url: this.URLService.getApiServiceUrl("/api/dict/list"),
            context: document.body
        });
    }
    getWordList() {
    	return $.ajax({
            url: this.URLService.getApiServiceUrl("/api/word/list"),
            context: document.body
        });
    }
    findWord(word, dict) {
        return $.ajax({
            method: "GET",
            url: this.URLService.getApiServiceUrl("/api/word/find"),
            context: document.body,
            data: {
                word: word,
                dict: dict
            },
            dataType: "json"
        });
    }
}