
function getSubmissions($scope, $http) {
    $http.get("https://hackernew.herokuapp.com/submissions.json'").
        success(function(data) {
            $scope.submissions = data;
        });
}

function getSubmission($scope, $http, submission) {
    $http.get("https://hackernew.herokuapp.com/submissions/"+submission+".json'").
        success(function(data) {
            $scope.submission = data;
        });
}

function getComments($scope, $http, submission) {
    $http.get("https://hackernew.herokuapp.com/submissions/"+submission+"/comments.json").
        success(function(data) {
            $scope.comments = data;
        });
}

function getComment($scope, $http, comment) {
    $http.get("https://hackernew.herokuapp.com/comments/"+comment+".json'").
        success(function(data) {
            $scope.comment = data;
        });
}


function getUserInfo($scope, $http, user) {
    $http.get("https://hackernew.herokuapp.com/users/"+user+".json'").
        success(function(data) {
            $scope.user = data;
        });
}