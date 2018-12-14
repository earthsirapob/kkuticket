var database = firebase.database(); 

var getUser="";
var getselectedMovie="";
var getselectedSeat="";
var getselectedRound="";
var getshowDate="";
var getstatus="";

var userAuth= "Chalermchai Viriyamanatham";

$(document).ready(function() {
    getUserData();
    
})

function getUserData() {
    var movieDatabase = ['CONTROLLER','ILLEGAL','วิปลาส'];
    
  //1/1/1
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("01-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("01-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //1/1/2
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("01-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("01-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });
  //1/2/1     
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("02-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("02-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //1/2/2
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("02-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("02-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });
      //1/3/1     
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("03-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("03-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //1/3/2
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("03-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("03-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });
      //1/4/1     
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("04-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("04-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //1/4/2
      firebase.database().ref(movieDatabase[0]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("04-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("04-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });    
      
      
      //////
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("01-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("01-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //2/1/2
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("01-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("01-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });
  //2/2/1     
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("02-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("02-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //2/2/2
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("02-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("02-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });
      //2/3/1     
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("03-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("03-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //2/3/2
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("03-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("03-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });
      //2/4/1     
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("04-02-2019").child('firstRound').val();
          var eachRoundLen = snapshot.child("04-02-2019").child('firstRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
             
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser);
                  }
                      
              } 
      });
  //2/4/2
      firebase.database().ref(movieDatabase[1]).once("value").then(function(snapshot) {
          var eachMovie = snapshot.child("04-02-2019").child('secoundRound').val();
          var eachRoundLen = snapshot.child("04-02-2019").child('secoundRound').numChildren()
          var keys = Object.keys(eachMovie);
          for(var j=0 ; j <eachRoundLen ;j++) {
                  var k = keys[j];
                  getUser = eachMovie[k].user;
                  if(userAuth == getUser){
                      getselectedMovie = eachMovie[k].selectedMovie;
                      getselectedSeat = eachMovie[k].selectedSeat;
                      getselectedRound = eachMovie[k].selectedRound;
                      getshowDate = eachMovie[k].showDate;
                      getstatus = eachMovie[k].status;
                      acSet(getselectedSeat,getstatus,getUser,getselectedRound);
                  }
                      
              } 
      });   
   
   //////

   firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("01-02-2019").child('firstRound').val();
      var eachRoundLen = snapshot.child("01-02-2019").child('firstRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
         
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser,getselectedRound,getshowDate);
              }
                  
          } 
  });
//1/1/2
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("01-02-2019").child('secoundRound').val();
      var eachRoundLen = snapshot.child("01-02-2019").child('secoundRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser,getselectedRound);
              }
                  
          } 
  });
//1/2/1     
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("02-02-2019").child('firstRound').val();
      var eachRoundLen = snapshot.child("02-02-2019").child('firstRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
         
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser);
              }
                  
          } 
  });
//1/2/2
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("02-02-2019").child('secoundRound').val();
      var eachRoundLen = snapshot.child("02-02-2019").child('secoundRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser,getselectedRound);
              }
                  
          } 
  });
  //1/3/1     
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("03-02-2019").child('firstRound').val();
      var eachRoundLen = snapshot.child("03-02-2019").child('firstRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
         
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser);
              }
                  
          } 
  });
//1/3/2
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("03-02-2019").child('secoundRound').val();
      var eachRoundLen = snapshot.child("03-02-2019").child('secoundRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser,getselectedRound);
              }
                  
          } 
  });
  //1/4/1     
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("04-02-2019").child('firstRound').val();
      var eachRoundLen = snapshot.child("04-02-2019").child('firstRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
         
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acSet(getselectedSeat,getstatus,getUser);
              }
                  
          } 
  });
//1/4/2
  firebase.database().ref(movieDatabase[2]).once("value").then(function(snapshot) {
      var eachMovie = snapshot.child("04-02-2019").child('secoundRound').val();
      var eachRoundLen = snapshot.child("04-02-2019").child('secoundRound').numChildren()
      var keys = Object.keys(eachMovie);
      for(var j=0 ; j <eachRoundLen ;j++) {
              var k = keys[j];
              getUser = eachMovie[k].user;
              if(userAuth == getUser){
                  getselectedMovie = eachMovie[k].selectedMovie;
                  getselectedSeat = eachMovie[k].selectedSeat;
                  getselectedRound = eachMovie[k].selectedRound;
                  getshowDate = eachMovie[k].showDate;
                  getstatus = eachMovie[k].status;
                  acset(getselectedSeat,getstatus,getUser,getselectedRound);
              }
                  
          } 
  });     
}
        
function acSet(getselectedSeat,getstatus,getUser,getselectedRound) {
    $(acName).html("ชื่อผู้ใช้ : " + getUser);
    $(acSeat).html("ลำดับที่นั่ง : " + getselectedSeat);
    $(acStatus).html("สถานะการจอง : " + getstatus);
    $(acDate).html("วันที่ : " + getshowDate);
    $(acRound).html("รอบที่ : " + getselectedRound);
}