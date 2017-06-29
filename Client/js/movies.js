var app=angular.module('movieApp');
app.controller('MovieCntrl',function($scope, $http){

    $scope.isEditting=true;
    var index = -1;
$scope.movies=[];
function fetchAllMovies(){
    $http.get('/movies').success(function(response){
        $scope.movies=response.response;

    });
}
fetchAllMovies();
console.log($scope.movies);

$scope.createMovie=function(a_movieName)
{
    var obj={movieName : a_movieName ,index : ++index};
    $scope.movieName='';
    //$scope.movies.push(obj);
    $http.post('/saveData',obj).success(function(resData){
        console.log("Data Saved Successfully",resData);
        $scope.movies.push(resData);
    });
}
$scope.edit=function(a_obj)
{
    $scope.movieName=a_obj.movieName;
    index=a_obj.index;
    $scope.isEditting=false;
    $scope.prevObj=a_obj;
}
$scope.updateMovie=function(a_movieName)
{
    var obj={movieName : a_movieName , index :index};
    $http.put('/update',[obj,$scope.prevObj]).success(function(resData){

        console.log("res in Update",resData);
         
    });
    //$scope.movies[index]=obj;
        $scope.movieName='';
     index=index;
     $scope.isEditting=true;
   
}
$scope.delete=function(movieObj){

    $http.delete('/delete/'+ movieObj.movieName).success(function(res){
        console.log("Dlete Response---",res);

        fetchAllMovies();
        index--;
    });
   // $scope.movies.splice(movieObj.index,1);
   var len=$scope.movies.length;
    for(var i=0;i<len;i++)
    {
       if(movieObj.index===$scope.movies[i].index)
      {
           $scope.movies.splice(i,1);
          index--;
     }
 }
}
});
