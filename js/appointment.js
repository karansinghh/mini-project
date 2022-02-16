var doctor;
function getAppointment(id) {
  var user = JSON.parse(sessionStorage.getItem('user'));
  $.ajax({
    url: "http://localhost:3000/doctor",
    data: "GET",
    success: (doctors) => {
      doctors.forEach(d => {
        if (id === d.id) 
          {
          doctor = d;

        }
        $("#getRequestAppointment").submit((event) => {
          event.preventDefault();
          var from = $("#from").val();
          var to = $("#to").val();
          // var data = {
          //   "userName": user.firstName + " " + user.lastName,
          //   "startDate": from,
          //   "endDate": to
          // }
          
       
           $.ajax({
            url: "http://localhost:3000/appointments",
            type: "POST",
            data: {
              
                
              
                  "userName": user.firstName + " " + user.lastName,
                  "startDate": from,
                  "endDate": to,
                  "doctorname": doctor.firstName+ " " + doctor.lastName,
                  
                
              

            },
            success: function (data) {
              console.log("success...")
            },
            error:(e)=>{
              alert(e);
            }
          })



        });
      });
    },
    error: (e) => {
      alert("error: " + e);
    },
    complete: () => {
      console.log("call is completed...");
    },

  });



}








