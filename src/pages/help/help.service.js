export default class HelpService {
    constructor($http) {
        this.$http = $http
    }
    getWordList() {
    	return $.ajax({
            url: "/api/word/list",
            context: document.body
        });
    }
    findWord(word) {
        return $.ajax({
            method: "GET",
            url: "/api/word/find",
            context: document.body,
            data: {
                word: word
            },
            dataType: "json"
        });
    }
}