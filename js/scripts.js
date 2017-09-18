$(function() {
$("#formone").submit(function(event) {
  event.preventDefault();
  $("#formone").hide();
  var inputs = ['side-a','side-b','side-c'];
  inputs.forEach(function(input) {
    // var userInputs = [];
    var userInputs= $("input#"+ input).val();
    $("#outputlist").append("<li>"+userInputs.toUpperCase()+"</li>");

    $("ul").show();
  });

});


});
