$(document).ready(() => {
  $("#login-form").submit((event) => {
    event.preventDefault();
    var email = $("#username").val();
    var password = $("#password").val();
  
    $.ajax({
      url: "http://localhost:3000/users",
      data: "GET",
      success: (x) => {
       
        x.forEach(element => {
          
          if (element.email === email && element.password === password) 
          {
            sessionStorage.setItem('user', JSON.stringify(element));
            window.location = "../html/userdash.html";
          }
        });
      },
      error: (e) => {
        alert("error: " + e);
      },
      complete: () => {
        console.log("call is completed...");
      },
    });

  });


   $("#doctorSignin").submit((event) => {
    event.preventDefault();
    var email = $("#doctorEmail").val();
    var password = $("#doctorPassword").val();
    $.ajax({
      url: "http://localhost:3000/doctor",
      data: "GET",
      success: (x) => {
        
        x.forEach(element => {
          if (element.email === email && element.password === password) {
           sessionStorage.setItem('doctor', JSON.stringify(element));
            window.location = "doctorDash.html"
          }


        });
      },
      error: (e) => {
        alert("error: " + e);
      },
      complete: () => {
        console.log("call is completed...");
      },
    });


  });
});