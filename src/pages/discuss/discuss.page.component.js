class DiscussPageCtrl {
    constructor($scope, DiscussService) {
        this.$scope = $scope;
        this.DiscussService = DiscussService;

        this.start();
    }

    start() {
    }
}

module.exports = {
    template: require('./discuss.page.component.html'),
    controller: DiscussPageCtrl,
    controllerAs: 'vm'
    // bindings: {
    //     wordData: '='
    // }
}