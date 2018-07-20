export default class HomeService {
  constructor($http) {
    this.$http = $http
  }

  getStats(word) {
    return this.$http.get('/')
  }
}