class WidgetListCtrl {
	constructor($scope) {
		this.$scope = $scope;
	}

	start() {
	}
}

module.exports = {
    template: require('./widget.list-control.component.html'),
    controller: WidgetListCtrl,
    bindings: {
        paginationModel: '=',
        displayModel: '=',
        listController: '='
    }
}