var firebaseConfig = {
    apiKey: "AIzaSyA_0NXTCsYJho-LUq4lhj2blE6l6lurWQw",
    authDomain: "rithika-activity-95.firebaseapp.com",
    databaseURL: "https://rithika-activity-95-default-rtdb.firebaseio.com",
    projectId: "rithika-activity-95",
    storageBucket: "rithika-activity-95.appspot.com",
    messagingSenderId: "13254944082",
    appId: "1:13254944082:web:6ba2a9a46bb9fc96b8868b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");
  var room_name=localStorage.getItem("room_name");

  function send()
{
      msg=document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
        message:msg,
        name:user_name,
        like:0
      });

      document.getElementById("msg").value="";
}