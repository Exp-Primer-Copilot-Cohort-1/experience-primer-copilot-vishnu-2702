function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'memberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}