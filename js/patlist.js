$(document).ready(()=>{
  
   var tr =  $('table tr');
    $.ajax({
        url: "http://localhost:3000/appointments",
        data: "GET",
        success: (x) => {
      
          var doctorList = x;
          doctorList.forEach(appointments => {
           
             var row = $("<tr><td>"+ appointments.userName + "</td><td>" + appointments.startDate+"</td><td>"+ appointments.endDate+"</td><td>"+appointments.doctorname+"</td><td>");
             $("#myTable").append(row);
            
            
            });
          
        },
        error: (e) => {
          alert("error: " + e);
        },
        complete: () => {
          console.log("call is completed...");
        },
      });
          
       
    
})