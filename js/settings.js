/*
//calls functions on page load
$(document).ready(function(){

  //Firebase promise that fires once it's determined if the user is logged in or out
  firebase.auth().onAuthStateChanged(firebaseUser => {
    //localStorage.clear();
    console.log('firebase.auth().onAuthStateChanged');
    //currentUser is a variable from the file, personal.js
    currentUser = firebaseUser;
    console.log('---');
    /*
    getSetting('music_setting');
    getSetting('movies_setting');
    getSetting('shows_setting');
    */
    /*
  });
});
*/
/*

//function to get the specified setting of the user
function getSetting(setting) {

  //If the user is logged in, pulls setting from database
  if(currentUser) {
    //Gets promise of user settings data specified by "setting" param
    console.log('Getting ' + setting + ' setting from database.');
    var promise = getUserData('/settings', setting);
    //Attempts to get value of promise
    try{
      promise.then(function(resolveValue) {
        //returns setting if the promise value resulted in !null
        if(resolveValue != null) {
          console.log('Returning found setting for ' + setting + ': ' + resolveValue);
          return resolveValue;
        }
        //else set the setting in database to true and returns true
        else {
          console.log(setting + ' was previous null or undefined (in database). Setting it to true.');
          writeUserData('/settings', setting, true);
          return true;
        }
        //catches that resulted in rejection
      }).catch(function(error) {
        console.log(error);
      });
    }
    //logs error if attempt failed
    catch(e) {
      console.log('promise.then error:')
      console.log(e);
    }
  }

  //else if the user is not logged in, pulls the setting from localStorage
  else {
    console.log('User is logged out. Getting ' + setting + ' setting from localStorage.');
    currSetting = localStorage.getItem(setting);
    //returns setting if the setting is found in localStorage
    if(currSetting != null) {
      console.log('Returning found setting for ' + setting + ': ' + currSetting);
      return currSetting;
    }
    //else set the setting in localStorage to be true and returns true
    else {
      console.log(setting + ' was previous null or undefined (in localStorage). Setting it to true.');
      localStorage.setItem(setting, true);
      return true;
    }
  }
}

//(untested) function to set the specified setting for the user
function setSetting(setting, value) {
  //sets settings for logged-in users
  if(currentUser) {
    writeUserData('/settings', setting, value);
  }
  //sets settings for non-logged-in users
  else {
    localStorage.setItem(setting, value);
  }
}


/****************************** Old Code ******************************/

/*
function togglerandom(string) {
  console.log('test function');
}

*/

(function() {

  var app = angular.module('settings', []);
  app.controller("ButtonCtrl", function($scope){

    //sets the active state of the music button
    if(localStorage.getItem("show_music") === null){
      $scope.musicActive = true;
    }
    else{
      $scope.musicActive = localStorage.getItem("show_music");
    }
    //sets the active state of the movies button
    if(localStorage.getItem("show_movies") === null){
      $scope.moviesActive = true;
    }
    else{
      $scope.moviesActive = localStorage.getItem("show_movies");
    }
    //sets the active state of the shows button
    if(localStorage.getItem("show_shows") === null){
      $scope.showsActive = true;
    }
    else{
      $scope.showsActive = localStorage.getItem("show_shows");
    }

    //functionality to toggle the buttons on-click
    $scope.toggleActive = function(section){
      //Toggle the musicActive button, and save its state in localStorage
      if(section == "music"){
        $scope.musicActive = !$scope.musicActive;
        localStorage.setItem("show_music", $scope.musicActive);
      }
      //Toggle the moviesActive button, and save its state in localStorage
      else if (section == "movies") {
        $scope.moviesActive = !$scope.moviesActive;
        localStorage.setItem("show_movies", $scope.moviesActive);
      }
      //Toggle the musicActive button, and save its state in localStorage
      else if(section == "shows"){
        $scope.showsActive = !$scope.showsActive;
        localStorage.setItem("show_shows", $scope.showsActive);
      }//end shows if
    };//end toggleMusic

  });//end Buttons
})();
