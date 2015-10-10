angular.module('contestApp', [])

angular.module('contestApp')
	.controller('contestController', ['$scope', '$http', function($scope, $http){
		$scope.greeting = 'Pandas rule'

		$http.get("/allsubmissions").then(function  (respondReturnData) { // ajax call
			$scope.allsubmissions = respondReturnData.data
		})

		$scope.submitNewEntry = function ( ) {
			$http.post("/postSubmissions",$scope.newEntry).then(function  (serverResponse) {
				$scope.allsubmissions = serverResponse.data
				$scope.newEntry = {}
			})
		}
 		// $scope.postSubmisions = function  () {
 		// 	$http.post('/postSubmisions',$scope.newEntry)
 		// }


	}]);