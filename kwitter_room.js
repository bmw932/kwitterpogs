var firebaseConfig = {
    apiKey: "AIzaSyAcF7xeLLWLNavKAlT2hIyJafrCKp0mCiQ",
    authDomain: "we-wo-8538e.firebaseapp.com",
    projectId: "we-wo-8538e",
    storageBucket: "we-wo-8538e.appspot.com",
    messagingSenderId: "1092488169326",
    appId: "1:1092488169326:web:0fa428183259dfaf7c637f",
    measurementId: "G-7ZBSZP61Q6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
