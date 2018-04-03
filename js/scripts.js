function Ticket (movie, time, age) {
  var price = "tickets";

    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )

      return "$10";
    }
    if(movie === "Matinee"){
        if(time === "elevenpm" || time=== "ninepm"){
          if(age === "teen" ){
            return "$10";
        }
      }
    }
    if(movie === "Matinee"){
        if(time ==="elevenpm" || time ==="ninepm"){
          if(age === "senior" ){
            return "$12";
        }
      }
    }
    if(movie === "Matrix"){
      if(age === "child" ){
      return "$10";
      }
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
    if(movie === "Avenger" || movie === "playerOne"){
      if(age === "child" )
      return "$10";
    }
}




















$(document).ready(function() {
  $("#ticketForm").submit(function(event){
    event.preventDefault();
  var userMovie = $("#movies").val();
  var userTime = $("#timeofDay").val();
  var userAge = $("input:radio[name=age]:checked").val();
  console.log(userMovie, userTime, userAge);
  var userResults = Ticket(userMovie, userTime, userAge);
  $(".cost").text(userResults)
});
});
