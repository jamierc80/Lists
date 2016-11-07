app.controller('menuCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {
    
    ///////////////////////////////////////////////////
    // Starting variables and getting list data
    ///////////////////////////////////////////////////
    if(sharedValues.get('list')){
        var list = sharedValues.get('list');
    }else{
        var list = [];
    }
    $scope.lists = list;
    
    ///////////////////////////////////////////////////
    //Button function to close modal and clear text box
    ///////////////////////////////////////////////////
    $scope.btnCancel = function() {
        $scope.listname = '';
        $('#newlist').modal('hide');
    }
    
    ///////////////////////////////////////////////////
    //Button function to create new list name
    ///////////////////////////////////////////////////
    $scope.btnNewList = function() {
            var title = $scope.listname;
            list.push({
                title: title,
                items: [],
                status: 1
            });
            sharedValues.set('list', list);
            $scope.listname = '';
            $('#newlist').modal('hide');
    }
}]);

app.controller('listCtrl',['$scope', '$location', 'sharedValues', '$routeParams', function ($scope, $location, sharedValues, $routeParams) {
    ///////////////////////////////////////////////////
    // Starting variables and getting list data
    ///////////////////////////////////////////////////
    var list = sharedValues.get('list');
    var i = $routeParams.id;
    $scope.index = $routeParams.id;
    $scope.lists = list;
    
    ///////////////////////////////////////////////////
    // Button function to navigate back to menu '/' page
    ///////////////////////////////////////////////////
    $scope.btnBack = function() {
        $location.path('/');
    }
    
    ///////////////////////////////////////////////////
    //Button function to close modal and clear text box
    ///////////////////////////////////////////////////
    $scope.btnCancel = function() {
        $scope.itemname = '';
        $('#newitem').modal('hide');
    }
    
    ///////////////////////////////////////////////////
    //Button function to close modal
    ///////////////////////////////////////////////////
    $scope.btnClose = function() {
        $('#deletelist').modal('hide');
    }
    
    ///////////////////////////////////////////////////
    //Button function to create new item name in list
    ///////////////////////////////////////////////////
    $scope.btnNewItem = function() {
            var title = $scope.itemname;
            list[$scope.index].items.push({
                title: title
            });
            sharedValues.set('list', list);
            $scope.itemname = '';
            $('#newitem').modal('hide');
    }
    
    ///////////////////////////////////////////////////
    //Button function to delete the whole list
    ///////////////////////////////////////////////////
    $scope.btnDeletelist = function() {
        if (i > -1) {
            list.splice(i, 1);
        }
        sharedValues.set('list', list);
        $(".modal-backdrop").hide();
        $location.path('/');
    }
    ///////////////////////////////////////////////////
    //Button function to delete an item
    ///////////////////////////////////////////////////
    $scope.btnRemoveItem = function(p) {
        if (p > -1) {
            list[i].items.splice(p, 1);
        }
        sharedValues.set('list', list);
        $scope.lists = list;
    }
}]);