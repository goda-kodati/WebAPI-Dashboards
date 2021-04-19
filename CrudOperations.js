
const firebaseConfig = {
    apiKey: "AIzaSyB9G83hAEyG7qQ0Y7zBbJdabg6haqfn4UU",
    authDomain: "awt-lab-1a32a.firebaseapp.com",
    databaseURL: "https://awt-lab-1a32a-default-rtdb.firebaseio.com",
    projectId: "awt-lab-1a32a",
    storageBucket: "awt-lab-1a32a.appspot.com",
    messagingSenderId: "346916522839",
    appId: "1:346916522839:web:432ccb3f9daa945f604c12",
    measurementId: "G-8WR6LGLZCR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var myref=firebase.database().ref().child("StudentList");
  function insertData(){
        var sname=document.getElementById("name").value;
        var rno=document.getElementById("roll").value;
        myref.child(rno).set({
            student_name:sname,
            student_rollno:rno
        })
        console.log("Inserted successfully!!");
  }
  function deleteData()
  {
        var rollno=window.prompt("Enter the rollno. to be deleted");
        myref.child(rollno).remove();
        console.log("Deleted Successfully!!");
  }
  function updateData()
  {
      var sname=document.getElementById("name").value;
      var rno=document.getElementById("roll").value;
      myref.child(rno).update({
        student_name:sname
      })
      console.log("Data Updated successfully!!");
  }
  function displayData()
  {
      console.log("Data is:");
      table=document.createElement("TABLE");
      table.border="1";
      row=table.insertRow(-1); 
      var rno=row.insertCell(-1);
      var name=row.insertCell(-1);
      name.innerHTML="STUDENT_NAME";
      rno.innerHTML="ROLLNO.";
      myref.on('value',(snap)=>{
          snap.forEach((data)=>{
            row=table.insertRow(-1);
            var rno=row.insertCell(-1);
            var name=row.insertCell(-1);
            rno.innerHTML=data.val().student_rollno;
            name.innerHTML=data.val().student_name;
            console.log(data.val().student_rollno)
          })
          })
      dispTable = document.getElementById("division");
      dispTable.append(table);
  }

  