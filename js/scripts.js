$(document).ready(function(){
  $("#blank form").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#confirm").show();
  });
});
