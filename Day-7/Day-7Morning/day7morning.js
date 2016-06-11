// window.onload = function() {
  // console.log the values of First Name and Last Name 
   // $(document).ready(function(){
    function getFormValues() {  
      var First = $("#form1").find('input[name="fname"]').val();
      var Second = $("#form1").find('input[name="lname"]').val();
      console.log(First + " " + Second);
    };

  // Change the color of the div with id "color-div"
  function changeColor() {
    $("#color-div").css({
      "color":'red',
      "font-size":"bold",
      "background-color":"#ABEBC6",
      "margin-right":"1090px",
      "margin-top":"10px",
      "margin-bottom":"10px",
      "font-size":"20px"
    });
  };
 // });

// }