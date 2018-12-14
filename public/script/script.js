var config = {
    apiKey: "AIzaSyClKf1proOivdaqE3cdGilbUv2i0V-DN-8",
    authDomain: "kkuticket.firebaseapp.com",
    databaseURL: "https://kkuticket.firebaseio.com",
    projectId: "kkuticket",
    storageBucket: "kkuticket.appspot.com",
    messagingSenderId: "626171340552"
  };firebase.initializeApp(config);

  var database = firebase.database(); 
  // for push data to database
  var selectedMovie = "";
  var showDate = "";
  var selectedRound = "";
  var selectedSeat = "";
  var selectedDate ="";
  var status ="";
  var user ="";
  //for get data from database to profile
  var getUser="";
  var getselectedMovie="";
  var getselectedSeat="";
  var getselectedRound="";
  var getshowDate="";
  var getstatus="";
  
  var userAuth= "Chalermchai Viriyamanatham";

  var ref ;

  $(document).ready(function() {
      $("img").click(function() {
          $(movieName).html(this.id);
              selectedMovie = this.id;
              ref = firebase.database().ref(this.id);
              $("td").css("background-color", "rgb(200, 200, 200)");
          });
          $("#showDetail").click(function(){
              $("td").css("background-color", "rgb(200, 200, 200)");
                      var day = document.getElementById("show_day").value;
                      var round = document.getElementById('show_time').value;
                      showDate = day;
                      selectedRound = round;
                      checkSeat();
                      getData();
      });
  });

  function checkSeat() {
  $(document).ready(function() {
      $("td").click(function() {
          if (this.id !== "") {
              var color = $(this).css( "background-color" );
                  selectedSeat = this.id;
                  if(color !== "rgb(243, 165, 48)" && color !== "rgb(0, 128, 0)"){
                  document.getElementById(selectedSeat).style.backgroundColor = "rgb(243, 165, 48)";
                  console.log("something")
                  pushData();
                  }
          }
      });
  });
}

  function getData() {
      ref.once("value").then(function(snapshot){
          var eachMovie = snapshot.child(showDate).child(selectedRound).val();
          var eachRoundLen = snapshot.child(showDate).child(selectedRound).numChildren()
          var keys = Object.keys(eachMovie);
          
          if(eachMovie !== null) {
              for(var i = 0 ; i < eachRoundLen ;i++) {
                  var k = keys[i];
                  var gselectedSeat = eachMovie[k].selectedSeat;
                  var gselectedMovie = eachMovie[k].selectedMovie;
                  var gstatus = eachMovie[k].status;
                  var guser = eachMovie[k].user;

                      if(selectedMovie !== gselectedMovie){
                          console.log("Diff");
                      }else
                      setSeat(gselectedSeat,gstatus);
              }
          }else $("td").css("background-color", "rgb(200, 200, 200)");
      }) 
  }
  
  function pushData() {
    firebase.database().ref().child(selectedMovie).child(showDate).child(selectedRound).push({
      selectedMovie,
      showDate,
      selectedRound,
      selectedSeat,
      selectedDate,
      status:"waiting",
      user:userAuth}).key;
  }
  function errData(err) {
      console.log(err)
  }

  function setSeat(seat,status) {
      console.log(status);

    if(status == 'true') {
        document.getElementById(seat).style.backgroundColor = "green";
  } else
        document.getElementById(seat).style.backgroundColor = "rgb(243, 165, 48)";
  }

  $(document).ready(function () {
                let now = new Date();
                let day = ("0" + now.getDate()).slice(-2);
                let month = ("0" + (now.getMonth() + 1)).slice(-2);
                let today = (day) + "-" + (month) + "-" + now.getFullYear();
                currentDate = today;
  });

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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                        // console.log(getselectedSeat,getstatus,getUser);
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
                        // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                    // console.log(getselectedSeat,getstatus,getUser);
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
                    // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                    // console.log(getselectedSeat,getstatus,getUser);
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
                    // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                    // console.log(getselectedSeat,getstatus,getUser);
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
                    // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
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
                    // console.log(getselectedSeat,getstatus,getUser);
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
                    // console.log(getselectedSeat,getstatus,getUser,getselectedRound);
                }
                    
            } 
    });     
}
          

   